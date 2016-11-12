import React from 'react';
import ReactDOM from 'react-dom';

// Modify with your startup's name!
var startupName = null;

var initialData = {
  "users": {
    "1": {
      "_id": 1,
      "contents": {
        "first_name": "Mike",
        "last_name": "Sinyard",
        "email": "specialized@example.com",
        "password": "*********",
        "builds": [29]
      }
    }
  },
    "builds": {
        "29":{
            "_id": 29,
            "bike_type": "Winter",
            "contents":{
              "status": 0,
              "total_price": "2499",
              "build_name": "My Build",
              "part":{
                "part_type":{
                  "wheels": [1],
                  "handlebars": [],
                  "seatpost": [],
                  "saddle": [],
                  "frame": [],
                  "shock": [],
                  "frontDerailleur": [],
                  "backDerailleur": [],
                  "chain": [],
                  "break": [],
                  "fork": [],
                  "shifter": [],
                  "tire": []
                }
              }
            }
        }
    },
    "bike_type": {
        "1": {
            "type": "Mountain",
            "_id": 1,
            "part":{
              "part_type":{
                "wheels": [],
                "handlebars": [],
                "seatpost": [],
                "saddle": [],
                "frame": [],
                "shock": [],
                "frontDerailleur": [],
                "backDerailleur": [],
                "chain": [],
                "break": [],
                "fork": [],
                "shifter": [],
                "tire": []
              }
            }
        },
        "2": {
            "type": "Road",
            "_id": 2,
            "part":{
              "part_type": {
                "wheels": [],
                "handlebars": [],
                "seatpost": [],
                "saddle": [],
                "frame": [],
                "frontDerailleur": [],
                "backDerailleur": [],
                "chain": [],
                "break": [],
                "shifter": [],
                "tire": []
              }
            }
        },
        "3": {
            "type": "Trail",
            "_id": 3,
            "part":{
              "part_type":{
                "wheels": [],
                "handlebars": [],
                "seatpost": [],
                "saddle": [],
                "frame": [],
                "shock": [],
                "frontDerailleur": [],
                "backDerailleur": [],
                "chain": [],
                "break": [],
                "fork": [],
                "shifter": [],
                "tire": []
              }
            }
        },
        "4": {
            "type": "Winter",
            "_id": 4,
            "part":{
              "part_type":{
                "wheels": [],
                "handlebars": [],
                "seatpost": [],
                "saddle": [],
                "frame": [],
                "shock": [],
                "frontDerailleur": [],
                "backDerailleur": [],
                "chain": [],
                "break": [],
                "fork": [],
                "shifter": [],
                "tire": []
              }
            }
        }
    },
    "parts":{
        "1":{
            "bike_type": 4,
            "part_type": 82,
            "url": "jensonusa.com",
            "_id": 1,
            "name": "29ner Wheel 1",
            "build": [29]
        }
    },
      "part_type": {
        "82":{
            "name": "29 wheel FRONT",
            "_id": 82
        },
        "83":{
            "name": "29 wheel REAR",
            "_id": 83
        },
        "84":{
            "name": "Fork MTN",
            "_id": 84
        },
        "85":{
            "name": "Shock MTN",
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
            "name": "Frame MTN",
            "_id": 89
        },
        "90":{
            "name": "Brakes",
            "_id": 90
        },
        "91":{
            "name": "29 wheel FRONT",
            "_id": 91
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
