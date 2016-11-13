import React from 'react';
import ReactDOM from 'react-dom';

// Modify with your startup's name!
var startupName = null;

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
            "parts": [30]
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
        "build": []
      }
    },
    "31":{
      "_id": 31,
      "contents": {
        "bike_type": [10,11,12,13],
        "part_type": 83,
        "url": "jensonusa.com",
        "name": "29ner Wheels",
        "build": []
      }
    },
    "32":{
      "_id": 32,
      "contents": {
        "bike_type": [10,12,13],
        "part_type": 84,
        "url": "jensonusa.com",
        "name": "Fork",
        "build": []
      }
    },
    "33":{
      "_id": 33,
      "contents": {
        "bike_type": [10,12,13],
        "part_type": 85,
        "url": "jensonusa.com",
        "name": "Shock",
        "build": []
      }
    },
    "34":{
      "_id": 34,
      "contents": {
        "bike_type": [10,11,12,13],
        "part_type": 86,
        "url": "jensonusa.com",
        "name": "Handlebar",
        "build": []
      }
    },
    "35":{
      "_id": 35,
      "contents": {
        "bike_type": [10,11,12,13],
        "part_type": 87,
        "url": "jensonusa.com",
        "name": "Saddle",
        "build": []
      }
    },
    "36":{
      "_id": 36,
      "contents": {
        "bike_type": [10,11,12,13],
        "part_type": 88,
        "url": "jensonusa.com",
        "name": "Seatpost",
        "build": []
      }
    },
    "37":{
      "_id": 37,
      "contents": {
        "bike_type": [10,11,12,13],
        "part_type": 89,
        "url": "jensonusa.com",
        "name": "Frame",
        "build": []
      }
    },
    "38":{
      "_id": 38,
      "contents": {
        "bike_type": [10,11,12,13],
        "part_type": 90,
        "url": "jensonusa.com",
        "name": "Brakes",
        "build": []
      }
    },
    "39":{
      "_id": 39,
      "contents": {
        "bike_type": [10,11,12,13],
        "part_type": 91,
        "url": "jensonusa.com",
        "name": "Rear Derailleur",
        "build": []
      }
    },
    "40":{
      "_id": 40,
      "contents": {
        "bike_type": [10,11,12,13],
        "part_type": 92,
        "url": "jensonusa.com",
        "name": "Front Derailleur",
        "build": []
      }
    }
    "41":{
      "_id": 41,
      "contents": {
        "bike_type": [10,11,12,13],
        "part_type": 93,
        "url": "jensonusa.com",
        "name": "Chain",
        "build": []
      }
    }
    "42":{
      "_id": 42,
      "contents": {
        "bike_type": [10,11,12,13],
        "part_type": 94,
        "url": "jensonusa.com",
        "name": "Shifter",
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
      "name": "Wheels",
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
    }
  }
};
  /**
 * A dumb cloning routing. Serializes a JSON object as a string, then
 * deserializes it.
 */

 var data = JSON.parse(localStorage.getItem(startupName));
 if (data === null) {
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
 export function readDocument(collection, id) {
   // Clone the data. We do this to model a database, where you receive a
   // *copy* of an object and not the object itself.
   return JSONClone(data[collection][id]);
 }

 /**
  * Emulates writing a "document" to a NoSQL database.
  */
 export function writeDocument(collection, changedDocument) {
   var id = changedDocument._id;
   // Store a copy of the object into the database. Models a database's behavior.
   data[collection][id] = JSONClone(changedDocument);
   // Update our 'database'.
   localStorage.setItem(startupName, JSON.stringify(data));
 }

 /**
  * Adds a new document to the NoSQL database.
  */
 export function addDocument(collectionName, newDoc) {
   var collection = data[collectionName];
   var nextId = Object.keys(collection).length;
   while (collection[nextId]) {
     nextId++;
   }
   newDoc._id = nextId;
   writeDocument(collectionName, newDoc);
   return newDoc;
 }

 /**
  * Reset our browser-local database.
  */
 export function resetDatabase() {
   localStorage.setItem(startupName, JSON.stringify(initialData));
   data = JSONClone(initialData);
 }

 /**
  * Reset database button.
  */
 class ResetDatabase extends React.Component {
   render() {
     return (
       <button className="btn btn-default" type="button" onClick={() => {
         resetDatabase();
         window.alert("Database reset! Refreshing the page now...");
         document.location.reload(false);
       }}>Reset Mock DB</button>
     );
   }
 }

 ReactDOM.render(
   <ResetDatabase />,
   document.getElementById('db-reset')
 );
