import React from 'react';
import ReactDOM from 'react-dom';

var initialData = {


  "users": {
        "1": {
            "_id": 1,
            "first_name": "Mike",
            "last_name": "Sinyard",
            "email": "specialized@example.com",
            "password": "*********",
            "builds": [29]
        },
        "2": {
            "_id": 2,
            "first_name": "Richard",
            "last_name": "Burke",
            "email": "trek@example.com",
            "password": "*********",
            "builds": []
        }

    },
    "builds": {
        "29":{
            "_id": 29,
            "type": "winter",
            "contents":{
              "status": 0,
              "total_price": "2499",
              "parts":{
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
    },
    "bike_types": {
        "1": {
            "name": "Mountain",
            "_id": 1
        },
        "2": {
            "name": "Road",
            "_id": 2
        },
        "3": {
            "name": "Trail",
            "_id": 3
        },
        "4": {
            "name": "Winter",
            "_id": 4
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
    "part_types":{
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

 var data = JSON.parse(localStorage.getItem('facebook_data'));
if (data === null) {
  data = JSONClone(initialData);
}

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
  localStorage.setItem('facebook_data', JSON.stringify(data));
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
  localStorage.setItem('facebook_data', JSON.stringify(initialData));
  data = JSONClone(initialData);
}

class ResetDatabase extends React.Component {
    render() {
        return ( < button className = "btn btn-default"
            type = "button"
            onClick = {
                () => {
                    resetDatabase();
                    window.alert("Database reset! Refreshing the page now...");
                    document.location.reload(false);
                }
            } > Reset Mock DB < /button>
        );
    }
}

ReactDOM.render(
    <ResetDatabase />,
    document.getElementById('bb-db-reset')
);
