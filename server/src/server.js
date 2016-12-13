var mongo_express = require('mongo-express/lib/middleware');
// Import the default Mongo Express configuration
var mongo_express_config = require('mongo-express/config.default.js');
// Imports the express Node module.
var express = require('express');
var readDocument = require('./database.js').readDocument
var validate = require('express-jsonschema').validate;
var writeDocument = require('./database.js').writeDocument;
var bodyParser = require('body-parser')
var addDocument = require('./database.js').addDocument;
var MongoDB = require('mongodb');
var MongoClient = MongoDB.MongoClient;
var ObjectID = MongoDB.ObjectID;
var url = 'mongodb://localhost:27017/bike-part-picker';
var BuildSchema = require('./schemas/BuildSchema.json');
var ResetDatabase = require('./resetdatabase');

// Creates an Express server.
var app = express();

MongoClient.connect(url, function(err, db) {
  // Support receiving text in HTTP request bodies
  app.use(bodyParser.text());
  // Support receiving JSON in HTTP request bodies
  app.use(bodyParser.json());

  // You run the server from `server`, so `../client/build` is `server/../client/build`.
  // '..' means "go up one directory", so this translates into `client/build`!
  app.use(express.static('../client/build'));

  app.use('/mongo_express', mongo_express(mongo_express_config));
  function sendDatabaseError(res, err) {
    res.status(500).send("A database error occurred: " + err);
  }


  function resolveUserObjects(userList, callback) {
    // Special case: userList is empty.
    // It would be invalid to query the database with a logical OR
    // query with an empty array.
    if (userList.length === 0) {
      callback(null, {});
    } else {
      // Build up a MongoDB "OR" query to resolve all of the user objects
      // in the userList.
      var query = {
        $or: userList.map((id) => {
          return {
            _id: id
          }
        })
      };
      // Resolve 'like' counter
      db.collection('users').find(query).toArray(function(err, users) {
        if (err) {
          return callback(err);
        }
        // Build a map from ID to user object.
        // (so userMap["4"] will give the user with ID 4)
        var userMap = {};
        users.forEach((user) => {
          userMap[user._id] = user;
        });
        callback(null, userMap);
      });
    }
  }
  /**
  * Get the user ID from a token. Returns -1 (an invalid ID)
  * if it fails.
  */
  function getUserIdFromToken(authorizationLine) {
    try {
      // Cut off "Bearer " from the header value.
      var token = authorizationLine.slice(7);
      // Convert the base64 string to a UTF-8 string.
      var regularString = new Buffer(token, 'base64').toString('utf8');
      // Convert the UTF-8 string into a JavaScript object.
      var tokenObj = JSON.parse(regularString);
      var id = tokenObj['id'];
      // Check that id is a number.
      if (typeof id === 'string') {
        return id;
      } else {
        // Not a number. Return -1, an invalid ID.
        return -1;
      }
    } catch ( e ) {
      // Return an invalid ID.
      return -1;
    }
  }

  //Updating the account information
  function updateAccount(userId, fName, lName, email, uName, newPassword, callback) {
    db.collection('users').findOne({
      _id: userId
    }, function(err,userData){
      if(err){
        return callback(err)
      }
      userData.contents.first_name = fName;
      userData.contents.last_name = lName;
      userData.contents.email = email;
      userData.contents.user_name = uName;
      userData.contents.password = newPassword;
      return userData;
    })
    // writeDocument('users', userData);
    // return userData;
    //
    // var info = readDocument('users', userId);
    // info.first_name = fName;
    // info.last_name = lName;
    // info.email = email;
    // info.user_name = uName;
    // info.password = newPassword;
    // writeDocument('users', info);
    // return info;
  }

  //updateAccount
  app.put('/user/update/:userid', function(req, res) {
    var fromUser = getUserIdFromToken(req.get('Authorization'));
    var body = req.body;
    var id = req.params.userid;
    if (fromUser === id) {
      db.collection('users').updateOne({_id: new ObjectID(id)},
    {
      $set: {first_name:body.first_name, last_name:body.last_name ,
        email: body.email, user_name:body.user_name, password: body.password }}, function(err){
        if(err){
          return sendDatabaseError(res,err);
        }
        getUserData(id, function(err, body){
          if(err){
            return sendDatabaseError(res,err);
          }
          res.send(body)
        })
      })
    } else {
      res.status(401).end();
    }
  });

  //updateAccount
  // app.put('/user/:users', function(req, res) {
  //   var fromUser = getUserIdFromToken('Autorization');
  //   var body = req.body;
  //   var id = req.params.userId;
  //   if (fromUser === id) {
  //     var account = updateAccount(id, body.fName, body.lName, body.email, body.uName, body.newPassword);
  //     res.send(account);
  //   } else {
  //     res.status(401).end();
  //   }
  // });

  // function changeAccountInfo(userId, newUserName, newFirstName, newLastName, newEmail, newPassword) {
  //   var info = readDocument('users', userId);
  //   info.user_name = newUserName;
  //   info.first_name = newFirstName;
  //   info.last_name = newLastName;
  //   info.email = newEmail;
  //   info.password = newPassword;
  //   return info;
  // // emulateServerReturn(userId, cb);
  // }

  function getParts(cb, res) {
    db.collection('parts').find({ _id: { $gte: new ObjectID("000000000000000000000030"), $lte: new ObjectID("000000000000000000000044") } }).toArray(function(err, items) {
          if (err) {
            return sendDatabaseError(res, err);
          }

          cb(items);
      }
    )
  }

  function getBuilds(userId, cb, res) {

    db.collection('users').findOne({ _id: userId}, function(err, userData) {
      if (err) {
        return sendDatabaseError(res, err);
      }

      var buildList = userData.buildList;

      db.collection('builds').find({ '_id': { '$in': buildList }}).toArray(function(err, builds) {
        if (err)
          return sendDatabaseError(res, err);
        cb(builds);
      })


    })
  }

  //BEGIN REGION HTTP ROUTES PUT THEM ALL HERE
  /*
  Posts a new build and associates with user.
  */
  app.post('/builds/:userid/',
    validate({
      body: BuildSchema
    }), function(req, res) {
      var body = req.body;
      var userid = req.params.userid;
      var fromUser = getUserIdFromToken(req.get('Authorization'));
      var useridNumber = userid;
      if (fromUser === useridNumber) {
        db.collection('builds').insertOne(body, function(err, result) {
          if (err) {
            return sendDatabaseError(res, err);
          } //setting id of new build
          body._id = result.insertedId;

          db.collection('users').findOne({
            _id: userid
          }, function(err, userObject) {
            if (err) {
              return sendDatabaseError(res, err);
            }
            db.collection('users').updateOne({
              _id: userObject._id
            },
              { //adding build to buildList of user
                $push: {
                  buildList: [body._id]
                }
              }, function(err) {
                if (err) {
                  return sendDatabaseError(res, err);
                }
                res.send(body);
              }
            )
          })
        })
      //   var newBuild=addDocument('builds', body);
      //   var userData=readDocument('users', userid);
      //   userData.buildList.push(newBuild._id);
      //   writeDocument('users', userData);
      //   res.send(newBuild);
      //left in here for posterity/tracking what we need to do. TODO: delete old code (commented out)
      } else {
        // 401 error
        res.status(401).end();
      }
    })
  /**
  * Get the whole parts list
  */
  function getPartName(buildId, partTypeId) {
    var name = "Empty";
    var build = readDocument('builds', buildId);
    for (var i = 0; i < Object.keys(build.contents.parts).length; i++) {
      var part = readDocument("parts", build.contents.parts[i]);
      if (part.contents.part_type === partTypeId) {
        name = part.contents.name;
        break;
      }
    }
    return name;
  }

  function getPartPrice(partTypeId, buildId) {
    var price = "N/A";
    var build = readDocument('builds', buildId);
    for (var i = 0; i < Object.keys(build.contents.parts).length; i++) {
      var part = readDocument("parts", build.contents.parts[i]);
      if (part.contents.part_type === partTypeId) {
        price = part.contents.price.toString();
        break;
      }
    }
    return price;
  }

  app.put('/builds/:buildId/parts/:partId', function(req, res) {
    var buildId = parseInt(req.params.buildId, 10);
    var partId = parseInt(req.params.partId, 10);
    var buildData = readDocument('builds', buildId);
    var newPart = readDocument('parts', partId);
    for (var i = 0; i < buildData.contents.parts.length; i++) {
      var existingPart = readDocument('parts', buildData.contents.parts[i]);
      if (newPart.contents.part_type === existingPart.contents.part_type) {
        buildData.contents.parts.splice(i, 1);
      }
    }
    buildData.contents.parts.push(partId);
    var price = 0.0;
    for (var a = 0; a < buildData.contents.parts.length; a++) {
      var part = readDocument('parts', buildData.contents.parts[i]);
      price = price + part.contents.price;
    }
    buildData.contents.price = price;
    writeDocument('builds', buildData);
    res.send(buildData);
  });



  app.get('/builds/:buildId/partType/:partTypeId/users/:userId', function(req, res) {
    var build = req.params.buildId;
    var partType = req.params.partTypeId;
    var user = req.params.userId;
    var userId = parseInt(user, 10);
    var buildId = parseInt(build, 10);
    var partTypeId = parseInt(partType, 10);
    res.send(getPartName(buildId, partTypeId));
  });

  app.get('/partType/:partTypeId/builds/:buildId/users/:userId', function(req, res) {
    var build = req.params.buildId;
    var partType = req.params.partTypeId;
    var user = req.params.userId;
    var userId = parseInt(user, 10);
    var buildId = parseInt(build, 10);
    var partTypeId = parseInt(partType, 10);
    res.send(getPartPrice(partTypeId, buildId));
  });

  /**
  * Get the build list data for a particular user.
  */
  app.get('/builds/:userid', function(req, res) {
    var userid = req.params.userid;
    var fromUser = getUserIdFromToken(req.get('Authorization'));
    // userid is a string.
    // Parameters are always strings.

    if (fromUser === userid) {
      // Send response.
      getBuilds(new ObjectID(userid), function(items) {
        res.send(items);
      }, res);
    } else {
      // 401: Unauthorized request.
      res.status(401).end();
    }
  });


  app.get('/parts_default', function(req, res) {
    getParts(function(items) {
      res.send(items);
    }, res);
  });

  function getUserData(user, callback) {
    db.collection('users').findOne({
      _id: user
    }, function(err, userData) {
      if (err) {
        return callback(err);
      } else if (userData === null) {
        return callback(null, null);
      }
      callback(null, userData);
    });
  }

  app.get('/users/:userid', function(req, res) {
    var userid = req.params.userid;
    var fromUser = getUserIdFromToken(req.get('Authorization'));
    if (fromUser === userid) {
      getUserData(new ObjectID(userid), function(err, userData) {
        if(err) {
          return sendDatabaseError(res, err);
        }
        res.send(userData);
      });
    } else {
      res.status(401).end();
    }
  });

  function getBuildData(buildId, callback) {
    db.collection('builds').findOne({
      _id: buildId
    }, function(err, buildData) {
      if (err) {
        return callback(err);
      } else if (buildData === null) {
        return callback(null, null);
      }
      callback(null, buildData);
    });
  }


  app.get('/builds/avoid/:buildid', function(req, res) {
    var buildid = req.params.buildid;
    var buildidNumber = new ObjectID(buildid);
    getBuildData(buildidNumber, function(err, buildData) {
      if(err) {
        return sendDatabaseError(res, err);
      }
      res.send(buildData);
    });
  });

  function writeBuildName(buildId, buildName, buildPrice, callback) {
    db.collection('builds').findOne(buildId, function(err,build){
      if(err){
        throw err;
      }
      db.collection('builds').insertOne({
        _id: buildId,
        build_name: buildName,
        total_price: buildPrice
      }, function(err){
        if(err){
          throw err
        }
      });
      callback(build);
    });
    }
    // db.collection('builds').insertOne({
    //   _id: buildId,
    //   build_name: buildName,
    //   total_price: buildPrice
    // }, function(err){
    //   if(err){
    //     throw err;
    //   }
    // });
    // var query ={
    //   "_id": buildId
    // });
    // db.insertOne({
    //   _id: buildId,
    //   build_name: buildName,
    //   total_price: buildPrice
    // }, function(err){
    //   if(err){
    //     return sendDatabaseError(res,err)
    //   }
    //   callback();
    // })

    // db.collection('builds').findOne({
    //   _id: buildId
    // }, function(err,buildData){
    //   if(err){
    //     return sendDatabaseError(res,err)
    //   }
    //   db.collection('build_name').insertOne({
    //     $set:{
    //       build_name: buildName,
    //       total_price: buildPrice
    //     }
    //   }, function(err){
    //     if(err){
    //     return  sendDatabaseError(res,err);
    //   }
      // })
      // buildData.contents.build_name = buildName;
      // buildData.contents.total_price = buildPrice;
      // return buildData;

    // buildData.contents.build_name = buildName;
    // buildData.contents.total_price = buildPrice;
    // return buildData;


  app.put('/builds/:buildId/build_name/:build_name', function(req, res) {
    var build_name = req.params.build_name;
    var buildId = new ObjectID(req.params.buildId);
    writeBuildName(buildId, build_name, req.body.price, function(err, build){
      if(err){
        return sendDatabaseError(err);
      }
      res.send(build);
    });
  });


  // Reset the database.
  app.post('/resetdb', function(req, res) {
    console.log("Resetting database...");
    ResetDatabase(db, function() {
      res.send();
    });
  });


  //END REGION HTTP ROUTES

  /**
    * Translate JSON Schema Validation failures into error 400s.
    Must go after all routes
    */
  app.use(function(err, req, res, next) {
    if (err.name === 'JsonSchemaValidation') {
      // Set a bad request http response status
      res.status(400).end();
    } else {
      // It's some other sort of error; pass it to next error middleware handler
      next(err);
    }
  });

  // Starts the server on port 3000!
  app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
  });
});
