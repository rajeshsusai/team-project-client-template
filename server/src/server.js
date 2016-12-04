// Imports the express Node module.
var express = require('express');
var readDocument = require('./database.js').readDocument
var validate = require('express-jsonschema').validate;
var writeDocument = require('./database.js').writeDocument;
var bodyParser = require('body-parser')
var addDocument = require('./database.js').addDocument;
var database = require('./database.js');

// Creates an Express server.
var app = express();

// Support receiving text in HTTP request bodies
app.use(bodyParser.text());
// Support receiving JSON in HTTP request bodies
app.use(bodyParser.json());

// You run the server from `server`, so `../client/build` is `server/../client/build`.
// '..' means "go up one directory", so this translates into `client/build`!
app.use(express.static('../client/build'));

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

/**
* Get the whole parts list
*/
app.get('/parts_default', function(req, res) {
    res.send(getParts());
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

  function emulateServerReturn(data, cb) {
    setTimeout(() => {
      cb(data);
    }, 4);
  }
  function getUserData(user) {
    var userData = readDocument('users', user);
    return userData;
  }

  app.get('/users/:userid', function(req, res) {
    var userId = req.params.userid;
    var fromUser = getUserIdFromToken(req.get('Authorization'));
    if(fromUser === userId) {
      res.send(getUserData(userId));
    }
    else {
      res.status(401).end();
    }
  });

  function getBuildData(buildId) {
    var buildData = readDocument('builds', buildId);
    return buildData;
  }

  app.get('/builds/:buildid', function(req, res) {
    var buildId = req.params.buildid;
    var fromUser = getUserIdFromToken(req.get('Authorization'));
    if(fromUser === buildId) {
      res.send(getBuildData(buildId));
    }
    else {
      res.status(401).end();
    }
  });

  function selectBikeType(user, bikeType, cb) {
    var newBuild;
    if(bikeType === 13) {
      newBuild ={
        "contents": {
          "bike_type": "Winter",
          "status": 0,
          "total_price": [],
          "build_name": [],
          "parts": []
        }
      };
    }
    else if(bikeType === 12) {
      newBuild ={
        "contents": {
          "bike_type": "Trail",
          "status": 0,
          "total_price": [],
          "build_name": [],
          "parts": []
        }
      };
  }
  else if(bikeType === 10) {
    newBuild ={
      "contents": {
        "bike_type": "Mountain",
        "status": 0,
        "total_price": [],
        "build_name": [],
        "parts": []
      }
    };
  }
  else if(bikeType === 11) {
    newBuild ={
      "contents": {
        "bike_type": "Road",
        "status": 0,
        "total_price": [],
        "build_name": [],
        "parts": []
      }
    };
 }
 newBuild = addDocument('builds', newBuild);//returns whole collection?
 var userData = readDocument('users', user);
 userData.buildList.push(newBuild._id);
 writeDocument('users', userData);
 emulateServerReturn(newBuild, cb);
}

function addPart(buildId, partId, cb) {
  var buildData = readDocument('builds', buildId);
  var newPart = readDocument('parts', partId);
  // for (var key in buildData.contents.parts){
  //   if (key.contents.part_type===newPart.contents.part_type){

  //     // buildData.contents.parts.splice(index, howMany)
  //   }
  // }
  for(var i = 0; i < buildData.contents.parts.length; i++) {
    var existingPart = readDocument('parts', buildData.contents.parts[i]);
    if(newPart.contents.part_type === existingPart.contents.part_type) {
      buildData.contents.parts.splice(i, 1);
    }
  }
  buildData.contents.parts.push(partId);
  var price = 0.0;
  for(var i = 0; i < buildData.contents.parts.length; i++){
    var part = readDocument('parts', buildData.contents.parts[i]);
    price = price + part.contents.price;
  }
  buildData.contents.price = price;
  writeDocument('builds', buildData);
  emulateServerReturn(buildData, cb);
}

function changeAccountInfo(userId, newUserName, newFirstName, newLastName, newEmail, newPassword, cb) {
  var info = readDocument('users', userId);
  info.user_name = newUserName;
  info.first_name = newFirstName;
  info.last_name = newLastName;
  info.email = newEmail;
  info.password = newPassword;
  writeDocument('users', info);
  emulateServerReturn(userId, cb);
}

function getCurrentStatus(buildId, cb) {
  var buildData = readDocument('builds', buildId);
  if(buildData.contents.bike_type === "Road") {
    if(buildData.contents.parts.length === 13) {
      buildData.contents.status = "Complete";
    }
    else {
      buildData.contents.status = "Incomplete";
    }
  }
  else {
    if(buildData.contents.parts.length === 15) {
      buildData.contents.status = "Complete";
    }
    else {
      buildData.contents.status = "Incomplete";
    }
  }
  writeDocument('builds', buildData);
  emulateServerReturn(buildData, cb);
}

function writeBuildName(buildId, buildName, buildPrice, cb) {
  var buildData = readDocument('builds', buildId);
  buildData.contents.build_name = buildName;
  buildData.contents.total_price=buildPrice;
  writeDocument('builds', buildData);
  emulateServerReturn(buildData, cb);
}

function getPartName(partId, partsList, cb){
  var name = "Empty";
  for(var i = 0; i < Object.keys(partsList).length; i++){
    var part = readDocument("parts", partsList[i]);
    if(part.contents.part_type === partId){
      name = part.contents.name;
      break;
    }
  }
  emulateServerReturn(name,cb);
}

function getPartPrice(partId, partsList, cb){
  var price = "N/A";
  for(var i = 0; i < Object.keys(partsList).length; i++){
    var part = readDocument("parts", partsList[i]);
    if(part.contents.part_type === partId){
      price = part.contents.price;
      break;
    }
  }
  emulateServerReturn(price,cb);
}

function getParts(cb){
  var parts = [];
  for (var i = 30; i <= 44; i++){
    var part = readDocument('parts', i);
    parts.push(part);
  }
  emulateServerReturn(parts, cb);
}

function getBuilds(userId, cb){
  var user = readDocument('users', userId);
  var builds =[];
  for(var i = 0; i < user.buildList.length; i++){
    var build = readDocument('builds', user.buildList[i]);
    builds.push(build);
  }
  emulateServerReturn(builds,cb);
}


  // Starts the server on port 3000!
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
