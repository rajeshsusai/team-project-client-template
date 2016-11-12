import {readDocument, writeDocument, addDocument} from './database.js';

/**
 * Emulates how a REST call is *asynchronous* -- it calls your function back
 * some time in the future with data.
 */
function emulateServerReturn(data, cb) {
  setTimeout(() => {
    cb(data);
  }, 4);
}

  export function getUserData(user, cb) {
    var userData = readDocument('users', user);
    emulateServerReturn(userData, cb);
  }

  function getBuildItemSync(userId) {
    var buildsList = readDocument('buildItems', userId);
    buildsList.build.forEach((build) => {
      build.author = readDocument('users', build.author);
    });
    return buildsList;
  }

 export function getBuildsData(user, cb) {
  var userData = readDocument('users', user);
  var buildsData = readDocument('builds', userData.builds);
  // Map the Feed's FeedItem references to actual FeedItem objects.
  // Note: While map takes a callback function as an argument, it is
  // synchronous, not asynchronous. It calls the callback immediately.
  buildsData.contents = buildsData.contents.map(getBuildItemSync);
  // Return FeedData with resolved references.
  // emulateServerReturn will emulate an asynchronous server operation, which // invokes (calls) the "cb" function some time in the future.
  emulateServerReturn(buildsData, cb);
}

 export function selectBikeType(user, bikeType, cb) {
  // If we were implementing this for real on an actual server,
  // we would check that the user ID is correct & matches the
  // authenticated user. But since we're mocking it, we can
  // be less strict.
  // The new status update. The database will assign the ID for us.
  var newBuild;
  if(bikeType === "winter") {
    newBuild ={
      "type": "winter",
      "contents": {
        "author": user,
        "buildName": [],
        "status": 0,
        "parts":{
          "wheels": [],
          "handlebars": [],
          "seatpost": [],
          "saddle": [],
          "frame": [],
          "shock": [],
          "frontDerailleur": [],
          "rearDerailleur": [],
          "chain": [],
          "brake": [],
          "fork": [],
          "shifter": [],
          "tire": []
        }
      }
    };
  }
  else if(bikeType === "trail") {
    newBuild ={
      "type": "trail",
      "contents": {
        "author": user,
        "buildName": [],
        "status": 0,
        "parts":{
          "wheels": [],
          "handlebars": [],
          "seatpost": [],
          "saddle": [],
          "frame": [],
          "shock": [],
          "frontDerailleur": [],
          "rearDerailleur": [],
          "chain": [],
          "brake": [],
          "fork": [],
          "shifter": [],
          "tire": []
        }
      }
    };
  }
  else if(bikeType === "mountain") {
    newBuild ={
      "type": "mountain",
      "contents": {
        "author": user,
        "buildName": [],
        "status": 0,
        "parts":{
          "wheels": [],
          "handlebars": [],
          "seatpost": [],
          "saddle": [],
          "frame": [],
          "shock": [],
          "frontDerailleur": [],
          "rearDerailleur": [],
          "chain": [],
          "brake": [],
          "fork": [],
          "shifter": [],
          "tire": []
        }
      }
    };
  }
    else if(bikeType === "road") {
      newBuild ={
        "type": "road",
        "contents": {
          "author": user,
          "buildName": [],
          "status": 0,
          "parts":{
            "wheels": [],
            "handlebars": [],
            "seatpost": [],
            "saddle": [],
            "frame": [],
            "frontDerailleur": [],
            "rearDerailleur": [],
            "chain": [],
            "brake": [],
            "shifter": [],
            "tire": []
          }
        }
      };
  }
  // Add the status update to the database.
  // Returns the status update w/ an ID assigned.
  newBuild = addDocument('buildItems', newBuild);
  // Add the status update reference to the front of the
  // current user's feed.
  var userData = readDocument('users', user);
  var buildsData = readDocument('builds', userData.build);
  buildsData.contents.unshift(newBuild._id);
  // Update the feed object.
  writeDocument('builds', buildsData);
  // Return the newly-posted object.
  emulateServerReturn(newBuild, cb);
}

export function addWheel(build, part, cb) {
  var buildData = readDocument('builds', build.contents);
  buildData.parts.wheels = part;
  writeDocument('builds', buildData);
  emulateServerReturn(buildData, cb);
}

export function addHandleBars(build, part, cb) {
  var buildData = readDocument('builds', build.contents);
  buildData.parts.handlebars = part;
  writeDocument('builds', buildData);
  emulateServerReturn(buildData, cb);
}

export function addSeatPost(build, part, cb) {
  var buildData = readDocument('builds', build.contents);
  buildData.parts.seatpost = part;
  writeDocument('builds', buildData);
  emulateServerReturn(buildData, cb);
}

export function addSaddle(build, part, cb) {
  var buildData = readDocument('builds', build.contents);
  buildData.parts.saddle = part;
  writeDocument('builds', buildData);
  emulateServerReturn(buildData, cb);
}

export function addFrame(build, part, cb) {
  var buildData = readDocument('builds', build.contents);
  buildData.parts.frame = part;
  writeDocument('builds', buildData);
  emulateServerReturn(buildData, cb);
}

export function addRearDerailleur(build, part, cb) {
  var buildData = readDocument('builds', build.contents);
  buildData.parts.rearDerailleur = part;
  writeDocument('builds', buildData);
  emulateServerReturn(buildData, cb);
}

export function addFrontDerailleur(build, part, cb) {
  var buildData = readDocument('builds', build.contents);
  buildData.parts.frontDerailleur = part;
  writeDocument('builds', buildData);
  emulateServerReturn(buildData, cb);
}

export function addChain(build, part, cb) {
  var buildData = readDocument('builds', build.contents);
  buildData.parts.chain = part;
  writeDocument('builds', buildData);
  emulateServerReturn(buildData, cb);
}

export function addBrake(build, part, cb) {
  var buildData = readDocument('builds', build.contents);
  buildData.parts.brake = part;
  writeDocument('builds', buildData);
  emulateServerReturn(buildData, cb);
}

export function addFork(build, part, cb) {
  var buildData = readDocument('builds', build.contents);
  buildData.parts.fork = part;
  writeDocument('builds', buildData);
  emulateServerReturn(buildData, cb);
}

export function addShifter(build, part, cb) {
  var buildData = readDocument('builds', build.contents);
  buildData.parts.shifter = part;
  writeDocument('builds', buildData);
  emulateServerReturn(buildData, cb);
}

export function addTire(build, part, cb) {
  var buildData = readDocument('builds', build.contents);
  buildData.parts.tire = part;
  writeDocument('builds', buildData);
  emulateServerReturn(buildData, cb);
}
