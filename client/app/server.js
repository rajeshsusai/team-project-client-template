import {readDocument, writeDocument, addDocument} from './database.js';
import React from 'react';

var token = "eyJpZCI6MX0=";

/**
* Properly configure+send an XMLHttpRequest with error handling,
* authorization token, and other needed properties.
*/

var token = 'eyJpZCI6MX0=';
function sendXHR(verb, resource, body, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open(verb, resource);
  xhr.setRequestHeader('Authorization', 'Bearer ' + token);
  // Otherwise, ESLint would complain about it! (See what happens in Atom if
  // you remove the comment...)
  /* global AppleError */
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
      AppleError('Could not ' + verb + " " + resource + ": Received " +
      statusCode + " " + statusText + ": " + responseText);
    }
  });
  // Time out the request if it takes longer than 10,000
  // milliseconds (10 seconds)
  xhr.timeout = 10000;
  // Network failure: Could not connect to server.
  xhr.addEventListener('error', function() {
    AppleError('Could not ' + verb + " " + resource +
    ": Could not connect to the server.");
  });
  // Network failure: request took too long to complete.
  xhr.addEventListener('timeout', function() {
    AppleError('Could not ' + verb + " " + resource +
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
    sendXHR('GET', '/users/'+user, undefined, (xhr) => {
      cb(JSON.parse(xhr.responseText));
    });
  }

  export function getBuildData(buildId, cb) {
    sendXHR('GET', '/builds/'+buildId, undefined, (xhr) => {
      cb(JSON.parse(xhr.responseText));
    });
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
 sendXHR('POST', '/builds/'+user+'/', newBuild, (xhr)=>{
  cb(JSON.parse(xhr.responseText));
 })
 // newBuild = addDocument('builds', newBuild);//returns whole collection?
 // var userData = readDocument('users', user);
 // userData.buildList.push(newBuild._id);
 // writeDocument('users', userData);
 // emulateServerReturn(newBuild, cb);
}

export function addPart(buildId, partId, cb) {
  sendXHR('PUT', '/builds/' + buildId + '/parts/' + partId, undefined, (xhr) =>{
    cb(JSON.parse(xhr.responseText));
  });
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

export function writeBuildName(buildId, buildName, buildPrice, cb) {
  var buildData = readDocument('builds', buildId);
  buildData.contents.build_name = buildName;
  buildData.contents.total_price=buildPrice;
  writeDocument('builds', buildData);
  emulateServerReturn(buildData, cb);
}

export function getPartName(partTypeId, buildId, userId, cb){
  sendXHR('GET', 'builds/' + buildId + '/partType/' + partTypeId +'/users/' + userId, undefined, (xhr)=>{
    cb(JSON.parse(JSON.stringify(xhr.responseText)));
  });
}

export function getPartPrice(partTypeId, buildId, userId, cb){
  sendXHR('GET', 'partType/' + partTypeId + '/builds/' + buildId + '/users/' + userId, undefined, (xhr)=>{
    cb(JSON.parse(JSON.stringify(xhr.responseText)));
  });
}

export function getParts(cb){
  sendXHR('GET', '/parts_default', undefined, (xhr) => {
    // Call the callback with the data.
    cb(JSON.parse(xhr.responseText));
  });
}

export function getBuilds(userId, cb){
  sendXHR('GET', '/builds/' + userId, undefined, (xhr) => {
  // Call the callback with the data.
  cb(JSON.parse(xhr.responseText));
  });
}
