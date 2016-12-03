import {readDocument, writeDocument, addDocument} from './database.js';

/**
* Properly configure+send an XMLHttpRequest with error handling,
* authorization token, and other needed properties.
*/
function sendXHR(verb, resource, body, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open(verb, resource);
  xhr.setRequestHeader('Authorization', 'Bearer ' + token);
  // Otherwise, ESLint would complain about it! (See what happens in Atom if
  // you remove the comment...)
  /* global FacebookError */
  // Response received from server. It could be a failure, though!
  xhr.addEventListener('load', function() {
    var statusCode = xhr.status;
    var statusText = xhr.statusText;
    if (statusCode >= 200 && statusCode < 300) {
      // Success: Status code is in the [200, 300) range.
      // Call the callback with the final XHR object.
      cb(xhr);
    } else {
      // Client or server error.
      // The server may have included some response text with details concerning
      // the error.
      var responseText = xhr.responseText;
      FacebookError('Could not ' + verb + " " + resource + ": Received " +
      statusCode + " " + statusText + ": " + responseText);
    }
  });
  // Time out the request if it takes longer than 10,000
  // milliseconds (10 seconds)
  xhr.timeout = 10000;
  // Network failure: Could not connect to server.
  xhr.addEventListener('error', function() {
    FacebookError('Could not ' + verb + " " + resource +
    ": Could not connect to the server.");
  });
  // Network failure: request took too long to complete.
  xhr.addEventListener('timeout', function() {
    FacebookError('Could not ' + verb + " " + resource +
    ": Request timed out.");
  });
  switch (typeof(body)) {
    case 'undefined':
    // No body to send.
    xhr.send();
    break;
    case 'string':
    // Tell the server we are sending text.

    xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
    xhr.send(body);
    break;
    case 'object':
    // Tell the server we are sending JSON.
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    // Convert body into a JSON string.
    xhr.send(JSON.stringify(body));
    break;
    default:
    throw new Error('Unknown body type: ' + typeof(body));
  }
}


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

  export function getBuildData(buildId, cb) {
    //var userData = readDocument('users', user);
    var buildData = readDocument('builds', buildId);
    //buildData = buildData.map(getBuildSync);
    emulateServerReturn(buildData, cb);
  }

  export function writeBuild(buildId, partId){
    var build = readDocument("builds", buildId);
    build.contents.parts.push(partId);
    writeDocument("builds", build);
  }

  export function removePartFromBuild(buildId, partId){
    var build = readDocument("builds", buildId);
    var index = build.contents.parts.indexOf(partId);
    if(index > -1){
      build.contents.parts.splice(index, 1);
    }
    writeDocument("builds", build);
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
 // Add the status update to the database.
 // Returns the status update w/ an ID assigned.
 newBuild = addDocument('builds', newBuild);
 // Add the status update reference to the front of the
 // current user's feed.
 var userData = readDocument('users', user);
 var buildsData = readDocument('builds', userData.buildList);
 buildsData.contents.unshift(newBuild._id);
 // Update the feed object.
 writeDocument('builds', buildsData);
 // Return the newly-posted object.
 emulateServerReturn(newBuild, cb);
}

export function addPart(buildId, partId, cb) {
  var buildData = readDocument('builds', buildId);
  buildData.contents.parts.push(partId);
  writeDocument('builds', buildData);
  emulateServerReturn(buildData, cb);
}

export function changeFirstName(userId, newFirstName, cb) {
  var info = readDocument('users', userId);
  info.first_name = newFirstName;
  writeDocument('users', info);
  emulateServerReturn(userId, cb);
}

export function changeLastName(userId, newLastName, cb) {
  var info = readDocument('users', userId);
  info.last_name = newLastName;
  writeDocument('users', info);
  emulateServerReturn(userId, cb);
}

export function changeEmail(userId, newEmail, cb) {
  var info = readDocument('users', userId);
  info.email = newEmail;
  writeDocument('users', info);
  emulateServerReturn(userId, cb);
}

export function changeUserName(userId, newUserName, cb) {
  var info = readDocument('users', userId);
  info.user_name = newUserName;
  writeDocument('users', info);
  emulateServerReturn(userId, cb);
}

export function changePassword(userId, newPassword, cb) {
  var info = readDocument('users', userId);
  info.password = newPassword;
  writeDocument('users', info);
  emulateServerReturn(userId, cb);
}
