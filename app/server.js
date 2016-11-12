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

  export function getUserBuilds(user, cb){
    var userData = readDocument("users", user);
    var builds = [];
    userData.builds.forEach((build) =>{
      builds.push(readDocument("builds", build));
    });
    emulateServerReturn(builds, cb);
  }

  function getBuildPartsSync(buildId) {
    var build = readDocument('build_parts', buildId);
    build.contents.parts.forEach((part) => {
      part.part_type = readDocument('builds', part.part_type);
    });
    return build;
  }

  export function getBuildData(user, cb) {
    var userData = readDocument('users', user);
    var buildData = readDocument('builds', userData.builds);
    buildData.contents = buildData.contents.map(getBuildsItemSync);
    emulateServerReturn(buildData, cb);
  }

  function getBuildsItemSync(buildId) {
    var builds = readDocument('builds', buildId);
    builds.contents.forEach((build) => {
      build.contents = readDocument('builds', build.contents);
    });
  }

  export function getBuildParts(user, cb) {
    var userData = readDocument('users', user);
    var buildsData = readDocument('builds', userData.builds);
    buildsData.contents.parts = buildsData.contents.parts.map(getBuildsItemSync);
    emulateServerReturn(buildsData, cb);
  }

  export function selectBikeType(user, bikeType, cb) {
    var newBuild;
    if(bikeType === "winter") {
      newBuild ={
        "type": "winter",
        "contents": {
          "author": user,
          "buildName": [],
          "status": 0,
          "part":{
            "part_type":{
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
        "part":{
          "part_type":{
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
        "part":{
          "part_type":{
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
      "part":{
        "part_type": {
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

export function addWheel(build, part, cb) {
  var buildData = readDocument('builds', build.contents);
  buildData.part.part_type.wheel = part;
  writeDocument('builds', buildData);
  emulateServerReturn(buildData, cb);
}

export function addHandleBars(build, part, cb) {
  var buildData = readDocument('builds', build.contents);
  buildData.part.part_type.handlebars = part;
  writeDocument('builds', buildData);
  emulateServerReturn(buildData, cb);
}

export function addSeatPost(build, part, cb) {
  var buildData = readDocument('builds', build.contents);
  buildData.part.part_type.seatpost = part;
  writeDocument('builds', buildData);
  emulateServerReturn(buildData, cb);
}

export function addSaddle(build, part, cb) {
  var buildData = readDocument('builds', build.contents);
  buildData.part.part_type.saddle = part;
  writeDocument('builds', buildData);
  emulateServerReturn(buildData, cb);
}

export function addFrame(build, part, cb) {
  var buildData = readDocument('builds', build.contents);
  buildData.part.part_type.frame = part;
  writeDocument('builds', buildData);
  emulateServerReturn(buildData, cb);
}

export function addRearDerailleur(build, part, cb) {
  var buildData = readDocument('builds', build.contents);
  buildData.part.part_type.rearDerailleur = part;
  writeDocument('builds', buildData);
  emulateServerReturn(buildData, cb);
}

export function addFrontDerailleur(build, part, cb) {
  var buildData = readDocument('builds', build.contents);
  buildData.part.part_type.frontDerailleur = part;
  writeDocument('builds', buildData);
  emulateServerReturn(buildData, cb);
}

export function addChain(build, part, cb) {
  var buildData = readDocument('builds', build.contents);
  buildData.part.part_type.chain = part;
  writeDocument('builds', buildData);
  emulateServerReturn(buildData, cb);
}

export function addBrake(build, part, cb) {
  var buildData = readDocument('builds', build.contents);
  buildData.part.part_type.brake = part;
  writeDocument('builds', buildData);
  emulateServerReturn(buildData, cb);
}

export function addFork(build, part, cb) {
  var buildData = readDocument('builds', build.contents);
  buildData.part.part_type.fork = part;
  writeDocument('builds', buildData);
  emulateServerReturn(buildData, cb);
}

export function addShifter(build, part, cb) {
  var buildData = readDocument('builds', build.contents);
  buildData.part.part_type.shifter = part;
  writeDocument('builds', buildData);
  emulateServerReturn(buildData, cb);
}

export function addTire(build, part, cb) {
  var buildData = readDocument('builds', build.contents);
  buildData.part.part_type.tire = part;
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
