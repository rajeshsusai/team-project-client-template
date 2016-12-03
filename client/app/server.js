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

   /*function getBuildSync(buildId) {
    var build = readDocument('builds', buildId);
    build.contents.parts = build.contents.parts.map((val) => {
      var parts = readDocument('parts', val);
      return parts;
    });
    return build;
  }*/

  export function getBuildData(buildId, cb) {
    //var userData = readDocument('users', userId);
    var buildData = readDocument('builds', buildId);
    // buildData.contents = buildData.contents.map(getBuildSync);
    emulateServerReturn(buildData, cb);
  }

  export function selectBikeType(user, bikeType, cb) {
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

export function addPart(buildId, partId, cb) {
  var buildData = readDocument('builds', buildId);
  buildData.contents.parts.push(partId);
  writeDocument('builds', buildData);
  emulateServerReturn(buildData, cb);
}

export function changeAccountInfo(userId, newUserName, newFirstName, newLastName, newEmail, newPassword, cb) {
  var info = readDocument('users', userId);
  info.user_name = newUserName;
  info.first_name = newFirstName;
  info.last_name = newLastName;
  info.email = newEmail;
  info.password = newPassword;
  writeDocument('users', info);
  emulateServerReturn(userId, cb);
}

export function getCurrentStatus(buildId, cb) {
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

export function writeBuildName(buildId, buildName, cb) {
  var buildData = readDocument('builds', buildId);
  buildData.contents.buildName = buildName;
  writeDocument('builds', buildData);
  emulateServerReturn(buildData, cb);
}
