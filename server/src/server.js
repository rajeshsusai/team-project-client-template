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
var BuildSchema=require('./schemas/BuildSchema.json');
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
      if (typeof id === 'number') {
        return id;
      } else {
        // Not a number. Return -1, an invalid ID.
        return -1;
      }
    } catch (e) {
      // Return an invalid ID.
      return -1;
    }
  }

//Updating the account information
function updateAccount(userId, fName, lName, email, uName, newPassword){
  var info = readDocument('users',userId);
  info.first_name = fName;
  info.last_name = lName;
  info.email = email;
  info.user_name = uName;
  info.password = newPassword;
  writeDocument('users',info);
  return info;
}

//updateAccount
app.put('/user/update/:userid', function(req,res){
  var fromUser = parseInt(getUserIdFromToken(req.get('Authorization')));
  var body = req.body;
  var id = parseInt(req.params.userid);
  if(fromUser === id){
    var account = updateAccount(id, body.fName,body.lName, body.email, body.uName, body.newPassword);
    res.send(account);
  }else{
    res.status(401).end();
  }
});

  //updateAccount
  app.put('/user/:users', function(req,res){
    var fromUser = getUserIdFromToken('Autorization');
    var body = req.body;
    var id = req.params.userId;
    if(fromUser === id){
      var account = updateAccount(id, body.fName,body.lName, body.email, body.uName, body.newPassword);
      res.send(account);
    }else{
      res.status(401).end();
    }
  });

  function changeAccountInfo(userId, newUserName, newFirstName, newLastName, newEmail, newPassword) {
    var info = readDocument('users', userId);
    info.user_name = newUserName;
    info.first_name = newFirstName;
    info.last_name = newLastName;
    info.email = newEmail;
    info.password = newPassword;
    return info;
    // emulateServerReturn(userId, cb);
  }

  function getParts(){
    var parts = [];
    for (var i = 30; i <= 44; i++){
      var part = readDocument('parts', i);
      parts.push(part);
    }
    return parts;
  }

  function getBuilds(userId){
    var user = readDocument('users', userId);
    var builds =[];
    for(var i = 0; i < user.buildList.length; i++){
      var build = readDocument('builds', user.buildList[i]);
      builds.push(build);
    }
    return builds;
  }

  //BEGIN REGION HTTP ROUTES PUT THEM ALL HERE
  /*
  Posts a new build and associates with user.
  */
  app.post('/builds/:userid/',
    validate({
      body: BuildSchema
    }), function(req, res){
    var body=req.body;
    var userid=req.params.userid;
    var fromUser=getUserIdFromToken(req.get('Authorization'));
    var useridNumber=parseInt(userid, 10);
    if (fromUser===useridNumber){
      var newBuild=addDocument('builds', body);
      var userData=readDocument('users', userid);
      userData.buildList.push(newBuild._id);
      writeDocument('users', userData);
      res.send(newBuild);
    }
    else{
      // 401 error
      res.status(401).end();
    }
  })
  /**
  * Get the whole parts list
  */
  function getPartName(buildId, partTypeId){
    var name = "Empty";
    var build = readDocument('builds', buildId);
    for(var i = 0; i < Object.keys(build.contents.parts).length; i++){
      var part = readDocument("parts", build.contents.parts[i]);
      if(part.contents.part_type === partTypeId){
        name = part.contents.name;
        break;
      }
    }
    return name;
  }

  function getPartPrice(partTypeId, buildId){
    var price = "N/A";
    var build = readDocument('builds', buildId);
    for(var i = 0; i < Object.keys(build.contents.parts).length; i++){
      var part = readDocument("parts", build.contents.parts[i]);
      if(part.contents.part_type === partTypeId){
        price = part.contents.price.toString();
        break;
      }
    }
    return price;
  }

  app.put('/builds/:buildId/parts/:partId', function(req, res){
    var buildId = parseInt(req.params.buildId, 10);
    var partId = parseInt(req.params.partId, 10);
    var buildData = readDocument('builds', buildId);
    var newPart = readDocument('parts', partId);
    for(var i = 0; i < buildData.contents.parts.length; i++) {
      var existingPart = readDocument('parts', buildData.contents.parts[i]);
      if(newPart.contents.part_type === existingPart.contents.part_type) {
        buildData.contents.parts.splice(i, 1);
      }
    }
    buildData.contents.parts.push(partId);
    var price = 0.0;
    for(var a = 0; a < buildData.contents.parts.length; a++){
      var part = readDocument('parts', buildData.contents.parts[i]);
      price = price + part.contents.price;
    }
    buildData.contents.price = price;
    writeDocument('builds', buildData);
    res.send(buildData);
  });

  app.get('/parts_default', function(req, res) {
      res.send(getParts());
  });

  app.get('/builds/:buildId/partType/:partTypeId/users/:userId', function(req, res){
    var build = req.params.buildId;
    var partType = req.params.partTypeId;
    var user = req.params.userId;
    var userId = parseInt(user, 10);
    var buildId = parseInt(build, 10);
    var partTypeId = parseInt(partType, 10);
    res.send(getPartName(buildId, partTypeId));
  });

  app.get('/partType/:partTypeId/builds/:buildId/users/:userId', function(req, res){
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
    // userid is a string. We need it to be a number.
    // Parameters are always strings.
    var useridNumber = parseInt(userid, 10);
    if (fromUser === useridNumber) {
      // Send response.
      res.send(getBuilds(userid));
    } else {
      // 401: Unauthorized request.
      res.status(401).end();
    }
  });

  function getUserData(user) {
    var userData = readDocument('users', user);
    return userData;
  }

  app.get('/users/:userid', function(req, res) {
      var userid = req.params.userid;
      var fromUser = getUserIdFromToken(req.get('Authorization'));
      var useridNumber = parseInt(userid, 10);
      if(fromUser === useridNumber) {
        res.send(getUserData(userid));
      }
      else {
        res.status(401).end();
      }
    });

    function getBuildData(buildId) {
      var buildData = readDocument('builds', buildId);
      return buildData;
    }

    app.get('/builds/avoid/:buildid', function(req, res) {
      var buildid = req.params.buildid;
      var buildidNumber = parseInt(buildid, 10);
      res.send(getBuildData(buildidNumber));  });

    function writeBuildName(buildId, buildName, buildPrice) {
      var buildData = readDocument('builds', buildId);
      buildData.contents.build_name = buildName;
      buildData.contents.total_price=buildPrice;
      writeDocument('builds', buildData);
      return buildData;
    }

    app.put('/builds/:buildId/build_name/:build_name', function(req, res){
      var build_name = req.params.build_name;
      var buildId = parseInt(req.params.buildId, 10);
      res.send(writeBuildName(buildId, build_name, req.body.price));
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
    app.listen(3000, function () {
      console.log('Example app listening on port 3000!');
    });
});
