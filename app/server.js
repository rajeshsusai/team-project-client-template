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

   function getBuildSync(buildId) {
    var build = readDocument('builds', buildId);
    build.contents.parts = build.contents.parts.map((val) => {
      var parts = readDocument('parts', val);
      return parts;
    });
    return build;
  }

  export function getBuildData(userId, buildId, cb) {
    var userData = readDocument('users', userId);
    var buildData = userData.buildList[buildId];
    buildData = buildData.map(getBuildSync);
    emulateServerReturn(buildData, cb);
  }

  export function selectBikeType(user, bikeType, cb) {
    var newBuild;
    if(bikeType === 13) {
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
    else if(bikeType === 12) {
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
  else if(bikeType === 10) {
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
  else if(bikeType === 11) {
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
 newBuild = addDocument('builds', newBuild);
 emulateServerReturn(newBuild, cb);
}

export function addPart(userId, buildId, partId, cb) {
  var userData = readDocument('users', userId);
  var buildData = userData.buildList[buildId];
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
