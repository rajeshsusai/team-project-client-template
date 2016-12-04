// Your startup's initial mock objects go here
var initialData = {
  "users": {
    "1": {
      "_id": 1,
      "user_name": "Msinyard",
      "first_name": "Mike",
      "last_name": "Sinyard",
      "email": "specialized@example.com",
      "password": "*********",
      "buildList": [1, 2, 3]
    }
  },
  "builds": {
      "1":{
          "_id": 1,
          "contents": {
            "bike_type": "Winter",
            "status": "Incomplete",
            "total_price": "64.99",
            "build_name": "My Build",
            "parts": [31, 32, 33]
          }
      },
      "2":{
          "_id": 2,
          "contents": {
            "bike_type": "Road",
            "status": "Incomplete",
            "total_price": "24.99",
            "build_name": "Road Runner",
            "parts": [30]
          }
      },
      "3":{
          "_id": 3,
          "contents": {
            "bike_type": "Trail",
            "status": "Incomplete",
            "total_price": "78.99",
            "build_name": "Wiley Coyote",
            "parts": [30]
          }
      }
  },
  "bike_type": {
    "10": {
      "type": "Mountain",
      "_id": 10
    },
    "11": {
      "type": "Road",
      "_id": 11
    },
    "12": {
      "type": "Trail",
      "_id": 12
    },
    "13": {
      "type": "Winter",
      "_id": 13
    }
  },
  "parts":{
    "30":{
      "_id": 30,
      "contents": {
        "bike_type": [10,11,12,13],
        "part_type": 82,
        "url": "jensonusa.com",
        "name": "29ner Tires",
        "price": 24.99,
        "build": []
      }
    },
    "31":{
      "_id": 31,
      "contents": {
        "bike_type": [10,11,12,13],
        "part_type": 83,
        "url": "jensonusa.com",
        "name": "29 cm Front Wheel",
        "price": 24.99,
        "build": []
      }
    },
    "32":{
      "_id": 32,
      "contents": {
        "bike_type": [10,12,13],
        "part_type": 84,
        "url": "jensonusa.com",
        "name": "Bike Suspension Fork",
        "price": 24.99,
        "build": []
      }
    },
    "33":{
      "_id": 33,
      "contents": {
        "bike_type": [10,12,13],
        "part_type": 85,
        "url": "jensonusa.com",
        "name": "Adjustable Shock",
        "price": 24.99,
        "build": []
      }
    },
    "34":{
      "_id": 34,
      "contents": {
        "bike_type": [10,11,12,13],
        "part_type": 86,
        "url": "jensonusa.com",
        "name": "Cruiser Handlebar",
        "price": 24.99,
        "build": []
      }
    },
    "35":{
      "_id": 35,
      "contents": {
        "bike_type": [10,11,12,13],
        "part_type": 87,
        "url": "jensonusa.com",
        "name": "Toupe Sport Saddle",
        "price": 24.99,
        "build": []
      }
    },
    "36":{
      "_id": 36,
      "contents": {
        "bike_type": [10,11,12,13],
        "part_type": 88,
        "url": "jensonusa.com",
        "name": "XSpeed Alloy Seatpost",
        "price": 24.99,
        "build": []
      }
    },
    "37":{
      "_id": 37,
      "contents": {
        "bike_type": [10,11,12,13],
        "part_type": 89,
        "url": "jensonusa.com",
        "name": "Sempre Road Frame",
        "price": 24.99,
        "build": []
      }
    },
    "38":{
      "_id": 38,
      "contents": {
        "bike_type": [10,11,12,13],
        "part_type": 90,
        "url": "jensonusa.com",
        "name": "Avid Disc Brakes",
        "price": 24.99,
        "build": []
      }
    },
    "39":{
      "_id": 39,
      "contents": {
        "bike_type": [10,11,12,13],
        "part_type": 91,
        "url": "jensonusa.com",
        "name": "Athena 11s Rear Derailleur",
        "price": 24.99,
        "build": []
      }
    },
    "40":{
      "_id": 40,
      "contents": {
        "bike_type": [10,11,12,13],
        "part_type": 92,
        "url": "jensonusa.com",
        "name": "Shimano 105 Front Derailleur",
        "price": 24.99,
        "build": []
      }
    },
    "41":{
      "_id": 41,
      "contents": {
        "bike_type": [10,11,12,13],
        "part_type": 93,
        "url": "jensonusa.com",
        "name": "415 Heavy Duty Chain",
        "price": 24.99,
        "build": []
      }
    },
    "42":{
      "_id": 42,
      "contents": {
        "bike_type": [10,11,12,13],
        "part_type": 94,
        "url": "jensonusa.com",
        "name": "Concord Grid Shifter",
        "price": 24.99,
        "build": []
      }
    },
    "43":{
      "_id": 43,
      "contents": {
        "bike_type": [10,11,12,13],
        "part_type": 95,
        "url": "jensonusa.com",
        "name": "29 Rear Wheel",
        "price": 24.99,
        "build": []
      }
    },
    "44":{
      "_id": 44,
      "contents": {
        "bike_type": [10,11,12,13],
        "part_type": 95,
        "url": "jensonusa.com",
        "name": "30 Rear Wheel",
        "price": 24.99,
        "build": []
      }
    }
  },

  "part_type": {
    "82":{
      "name": "Tires",
      "_id": 82
    },
    "83":{
      "name": "Front Wheel",
      "_id": 83
    },
    "84":{
      "name": "Fork",
      "_id": 84
    },
    "85":{
      "name": "Shock",
      "_id": 85
    },
    "86":{
      "name": "Handlebar",
      "_id": 86
    },
    "87":{
      "name": "Saddle",
      "_id": 87
    },
    "88":{
      "name": "Seatpost",
      "_id": 88
    },
    "89":{
      "name": "Frame",
      "_id": 89
    },
    "90":{
      "name": "Brakes",
      "_id": 90
    },
    "91":{
      "name": "Rear Derailleur",
      "_id": 91
    },
    "92":{
      "name": "Front Derailleur",
      "_id": 92
    },
    "93":{
      "name": "Chain",
      "_id": 93
    },
    "94":{
      "name": "Shifter",
      "_id": 94
    },
    "95":{
      "name": "Rear Wheel",
      "_id": 95
    }
  }
};

var data = JSONClone(initialData);
// If 'true', the in-memory object representing the database has changed,
// and we should flush it to disk.
var updated = false;
// Pull in Node's file system and path modules.
var fs = require('fs'),
  path = require('path');

try {
  // ./database.json may be missing. The comment below prevents ESLint from
  // complaining about it.
  // Read more about configuration comments at the following URL:
  // http://eslint.org/docs/user-guide/configuring#configuring-rules
  /* eslint "node/no-missing-require": "off" */
  data = JSONClone(initialData);
} catch (e) {
  // ./database.json is missing. Use the seed data defined above
  data = JSONClone(initialData);
}

/**
 * A dumb cloning routing. Serializes a JSON object as a string, then
 * deserializes it.
 */
function JSONClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Emulates reading a "document" from a NoSQL database.
 * Doesn't do any tricky document joins, as we will cover that in the latter
 * half of the course. :)
 */
function readDocument(collection, id) {
  // Clone the data. We do this to model a database, where you receive a
  // *copy* of an object and not the object itself.
  var collectionObj = data[collection];
  if (!collectionObj) {
    throw new Error(`Object collection ${collection} does not exist in the database!`);
  }
  var obj = collectionObj[id];
  if (obj === undefined) {
    throw new Error(`Object ${id} does not exist in object collection ${collection} in the database!`);
  }
  return JSONClone(data[collection][id]);
}
module.exports.readDocument = readDocument;

/**
 * Emulates writing a "document" to a NoSQL database.
 */
function writeDocument(collection, changedDocument) {
  var id = changedDocument._id;
  if (id === undefined) {
    throw new Error(`You cannot write a document to the database without an _id! Use AddDocument if this is a new object.`);
  }
  // Store a copy of the object into the database. Models a database's behavior.
  data[collection][id] = JSONClone(changedDocument);
  // Update our 'database'.
  updated = true;
}
module.exports.writeDocument = writeDocument;

/**
 * Adds a new document to the NoSQL database.
 */
function addDocument(collectionName, newDoc) {
  var collection = data[collectionName];
  var nextId = Object.keys(collection).length;
  if (newDoc.hasOwnProperty('_id')) {
    throw new Error(`You cannot add a document that already has an _id. addDocument is for new documents that do not have an ID yet.`);
  }
  while (collection[nextId]) {
    nextId++;
  }
  newDoc._id = nextId;
  writeDocument(collectionName, newDoc);
  return newDoc;
}
module.exports.addDocument = addDocument;

/**
 * Deletes a document from an object collection.
 */
function deleteDocument(collectionName, id) {
  var collection = data[collectionName];
  if (!collection[id]) {
    throw new Error(`Collection ${collectionName} lacks an item with id ${id}!`);
  }
  delete collection[id];
  updated = true;
}
module.exports.deleteDocument = deleteDocument;

/**
 * Returns an entire object collection.
 */
function getCollection(collectionName) {
  return JSONClone(data[collectionName]);
}
module.exports.getCollection = getCollection;

/**
 * Reset the database.
 */
function resetDatabase() {
  data = JSONClone(initialData);
  updated = true;
}
module.exports.resetDatabase = resetDatabase;

// Periodically updates the database on the hard drive
// when changed.
setInterval(function() {
  if (updated) {
    fs.writeFileSync(path.join(__dirname, 'database.json'), JSON.stringify(data), { encoding: 'utf8' });
    updated = false;
  }
}, 200);
