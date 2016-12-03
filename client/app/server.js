import {readDocument, writeDocument, addDocument} from './database.js';
import React from 'react';

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

  export function getBuildData(buildId, cb) {
    var buildData = readDocument('builds', buildId);
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

export function writeBuildName(buildId, buildName, buildPrice, cb) {
  var buildData = readDocument('builds', buildId);
  buildData.contents.build_name = buildName;
  buildData.contents.total_price=buildPrice;
  writeDocument('builds', buildData);
  emulateServerReturn(buildData, cb);
}

export function getPartName(partId, partsList, cb){
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

export function getPartNameById(partId, cb){
  var name = "";
  var part = readDocument("parts", partId);
  name = part.contents.name;
  emulateServerReturn(name, cb);
}

export function getPartPrice(partId, partsList, cb){
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

export function getParts(cb){
  var parts = [];
  for(var i = 30; i <=44; i++){
    var part = readDocument("parts", i);
    parts.push(part);
  }
  emulateServerReturn(parts, cb);
}
