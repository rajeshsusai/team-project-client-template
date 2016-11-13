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

  export function getBuildSync(buildId) {
    var build = readDocument('builds', buildId);
    build.contents.parts = build.contents.parts.map((val) => {
      var parts = readDocument('parts', val);
      return parts;
    });

    return build;
  }

  export function getBuildData(user, cb) {
    var userData = readDocument('users', user);
    var buildData = readDocument('builds', userData.buildList);
    buildData = buildData.map(getBuildSync);
    emulateServerReturn(buildData, cb);
  }

  function getBuildListSync(buildId) {
    var builds = readDocument('builds', buildId);
    builds.contents.forEach((build) => {
      build.contents = readDocument('builds', build.contents);
    });
  }

  export function getBuildListData(user, cb) {
    var userData = readDocument('users', user);
    var buildsData = readDocument('builds', userData.buildList);
    buildsData.contents = buildsData.contents.map(getBuildListSync);
    emulateServerReturn(buildsData, cb);
  }

  export function selectBikeType(user, bikeType, cb) {
    var newBuild = readDocument();
    if(bikeType === "Winter") {
      newBuild ={
        "type": "Winter",
        "contents": {
          "author": user,
          "buildName": [],
          "status": 0,
          "parts": []
        }
      };
    }
    else if(bikeType === "Trail") {
      newBuild ={
        "type": "Trail",
        "contents": {
        "author": user,
        "buildName": [],
        "status": 0,
        "part": []
      }
    };
  }
  else if(bikeType === "Mountain") {
    newBuild ={
      "type": "Mountain",
      "contents": {
        "author": user,
        "buildName": [],
        "status": 0,
        "part": []
      }
    };
  }
  else if(bikeType === "Road") {
    newBuild ={
      "type": "Road",
      "contents": {
      "author": user,
      "buildName": [],
      "status": 0,
      "part": []
     }
   };
 }
 // Add the status update to the database.
 // Returns the status update w/ an ID assigned.
 newBuild = addDocument('builds', newBuild);
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

export function addPart(buildId, bike_type, part_type, url, name, build, cb) {
  var buildData = readDocument('builds', buildId);
  buildData.contents.parts.contents.push({
    "bike_type": [bike_type],
    "part_type": part_type,
    "url": url,
    "name": name,
    "build": []
  });
  writeDocument('builds', buildData);
  emulateServerReturn(buildData, cb);
}

export function changePassword(userId, newPassword, cb) {
  var info = readDocument('users', userId);
  info.push({
    "password": newPassword
  });
  writeDocument('users', info);
  emulateServerReturn(userId, cb);
}
