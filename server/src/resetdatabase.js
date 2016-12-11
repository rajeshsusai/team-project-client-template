var ObjectID = require('mongodb').ObjectID;

// Put your startup's name here (only letters and numbers -- no spaces, apostrophes, or special characters!)
var databaseName = "bike-part-picker";
// Put the initial mock objects here.
var initialData = {
  "users": {
    "1": {
      "_id": new ObjectID("000000000000000000000001"),
      "user_name": "Msinyard",
      "first_name": "Mike",
      "last_name": "Sinyard",
      "email": "specialized@example.com",
      "password": "*********",
      "buildList": [new ObjectID("000000000000000000000001"), new ObjectID("000000000000000000000002"), new ObjectID("000000000000000000000003")]
    }
  },
  "builds": {
      "1":{
          "_id": new ObjectID("000000000000000000000001"),
          "contents": {
            "bike_type": "Winter",
            "status": "Incomplete",
            "total_price": "64.99",
            "build_name": "My Build",
            "parts": [new ObjectID("000000000000000000000031"), new ObjectID("000000000000000000000032"), new ObjectID("000000000000000000000033")]
          }
      },
      "2":{
          "_id": new ObjectID("000000000000000000000002"),
          "contents": {
            "bike_type": "Road",
            "status": "Incomplete",
            "total_price": "24.99",
            "build_name": "Road Runner",
            "parts": [new ObjectID("000000000000000000000030")]
          }
      },
      "3":{
          "_id": new ObjectID("000000000000000000000003"),
          "contents": {
            "bike_type": "Trail",
            "status": "Incomplete",
            "total_price": "78.99",
            "build_name": "Wiley Coyote",
            "parts": [new ObjectID("000000000000000000000030")]
          }
      }
  },
  "bike_type": {
    "10": {
      "type": "Mountain",
      "_id": new ObjectID("000000000000000000000010")
    },
    "11": {
      "type": "Road",
      "_id": new ObjectID("000000000000000000000011")
    },
    "12": {
      "type": "Trail",
      "_id": new ObjectID("000000000000000000000012")
    },
    "13": {
      "type": "Winter",
      "_id": new ObjectID("000000000000000000000013")
    }
  },
  "parts":{
    "30":{
      "_id": new ObjectID("000000000000000000000030"),
      "contents": {
        "bike_type": [new ObjectID("000000000000000000000010"),new ObjectID("000000000000000000000011"),new ObjectID("000000000000000000000012"),new ObjectID("000000000000000000000013")],
        "part_type": new ObjectID("000000000000000000000082"),
        "url": "jensonusa.com",
        "name": "WTB Velociraptor Tires 26-inch",
        "price": 39.99,
        "build": []
      }
    },
    "31":{
      "_id": new ObjectID("000000000000000000000031"),
      "contents": {
        "bike_type": [new ObjectID("000000000000000000000010"),new ObjectID("000000000000000000000011"),new ObjectID("000000000000000000000012"),new ObjectID("000000000000000000000013")],
        "part_type": new ObjectID("000000000000000000000083"),
        "url": "jensonusa.com",
        "name": "AlexRims DM-21 with Formula Disc Hub",
        "price": 80.99,
        "build": []
      }
    },
    "32":{
      "_id": new ObjectID("000000000000000000000032"),
      "contents": {
        "bike_type": [new ObjectID("000000000000000000000010"),new ObjectID("000000000000000000000012"),new ObjectID("000000000000000000000013")],
        "part_type": new ObjectID("000000000000000000000084"),
        "url": "jensonusa.com",
        "name": "Manitou Axel Comp Oil Dampened Fork",
        "price": 149.99,
        "build": []
      }
    },
    "33":{
      "_id": new ObjectID("000000000000000000000033"),
      "contents": {
        "bike_type": [new ObjectID("000000000000000000000010"),new ObjectID("000000000000000000000012"),new ObjectID("000000000000000000000013")],
        "part_type": new ObjectID("000000000000000000000085"),
        "url": "jensonusa.com",
        "name": "Manitou Metel Rear Suspension Shock",
        "price": 99.99,
        "build": []
      }
    },
    "34":{
      "_id": new ObjectID("000000000000000000000034"),
      "contents": {
        "bike_type": [new ObjectID("000000000000000000000010"),new ObjectID("000000000000000000000011"),new ObjectID("000000000000000000000012"),new ObjectID("000000000000000000000013")],
        "part_type": new ObjectID("000000000000000000000086"),
        "url": "jensonusa.com",
        "name": "Ritchey Comp Alloy Handlebar",
        "price": 29.99,
        "build": []
      }
    },
    "35":{
      "_id": new ObjectID("000000000000000000000035"),
      "contents": {
        "bike_type": [new ObjectID("000000000000000000000010"),new ObjectID("000000000000000000000011"),new ObjectID("000000000000000000000012"),new ObjectID("000000000000000000000013")],
        "part_type": new ObjectID("000000000000000000000087"),
        "url": "jensonusa.com",
        "name": "Fuji Velo MTB 146mm Saddle",
        "price": 24.99,
        "build": []
      }
    },
    "36":{
      "_id": new ObjectID("000000000000000000000036"),
      "contents": {
        "bike_type": [new ObjectID("000000000000000000000010"),new ObjectID("000000000000000000000011"),new ObjectID("000000000000000000000012"),new ObjectID("000000000000000000000013")],
        "part_type": new ObjectID("000000000000000000000088"),
        "url": "jensonusa.com",
        "name": "FSA Gravity Light Seatpost",
        "price": 24.99,
        "build": []
      }
    },
    "37":{
      "_id": new ObjectID("000000000000000000000037"),
      "contents": {
        "bike_type": [new ObjectID("000000000000000000000010"),new ObjectID("000000000000000000000011"),new ObjectID("000000000000000000000012"),new ObjectID("000000000000000000000013")],
        "part_type": new ObjectID("000000000000000000000089"),
        "url": "jensonusa.com",
        "name": "Raleigh RAM Frame",
        "price": 499.99,
        "build": []
      }
    },
    "38":{
      "_id": new ObjectID("000000000000000000000038"),
      "contents": {
        "bike_type": [new ObjectID("000000000000000000000010"),new ObjectID("000000000000000000000011"),new ObjectID("000000000000000000000012"),new ObjectID("000000000000000000000013")],
        "part_type": new ObjectID("000000000000000000000090"),
        "url": "jensonusa.com",
        "name": "Shimano XTR-Race Hydraulic Brakes",
        "price": 299.99,
        "build": []
      }
    },
    "39":{
      "_id": new ObjectID("000000000000000000000039"),
      "contents": {
        "bike_type": [new ObjectID("000000000000000000000010"),new ObjectID("000000000000000000000011"),new ObjectID("000000000000000000000012"),new ObjectID("000000000000000000000013")],
        "part_type": new ObjectID("000000000000000000000091"),
        "url": "jensonusa.com",
        "name": "Shimano Deore XT 9-Speed SGS Rear Derailleur",
        "price": 64.99,
        "build": []
      }
    },
    "40":{
      "_id": new ObjectID("000000000000000000000040"),
      "contents": {
        "bike_type": [new ObjectID("000000000000000000000010"),new ObjectID("000000000000000000000011"),new ObjectID("000000000000000000000012"),new ObjectID("000000000000000000000013")],
        "part_type": new ObjectID("000000000000000000000092"),
        "url": "jensonusa.com",
        "name": "Shimano SLX 3x10 Front Derailleur",
        "price": 30.99,
        "build": []
      }
    },
    "41":{
      "_id": new ObjectID("000000000000000000000041"),
      "contents": {
        "bike_type": [new ObjectID("000000000000000000000010"),new ObjectID("000000000000000000000011"),new ObjectID("000000000000000000000012"),new ObjectID("000000000000000000000013")],
        "part_type": new ObjectID("000000000000000000000093"),
        "url": "jensonusa.com",
        "name": "KMC X9.93 9-Speed Chain 117 Link",
        "price": 17.49,
        "build": []
      }
    },
    "42":{
      "_id": new ObjectID("000000000000000000000042"),
      "contents": {
        "bike_type": [new ObjectID("000000000000000000000010"),new ObjectID("000000000000000000000011"),new ObjectID("000000000000000000000012"),new ObjectID("000000000000000000000013")],
        "part_type": new ObjectID("000000000000000000000094"),
        "url": "jensonusa.com",
        "name": "Shimano XTR Dual Control Brake and Shifter",
        "price": 349.99,
        "build": []
      }
    },
    "43":{
      "_id": new ObjectID("000000000000000000000043"),
      "contents": {
        "bike_type": [new ObjectID("000000000000000000000010"),new ObjectID("000000000000000000000011"),new ObjectID("000000000000000000000012"),new ObjectID("000000000000000000000013")],
        "part_type": new ObjectID("000000000000000000000095"),
        "url": "jensonusa.com",
        "name": "AlexRims DM21 Rear Wheel with Formula Disc Hub",
        "price": 149.99,
        "build": []
      }
    },
    "44":{
      "_id": new ObjectID("000000000000000000000044"),
      "contents": {
        "bike_type": [new ObjectID("000000000000000000000010"),new ObjectID("000000000000000000000011"),new ObjectID("000000000000000000000012"),new ObjectID("000000000000000000000013")],
        "part_type": new ObjectID("000000000000000000000095"),
        "url": "jensonusa.com",
        "name": "Forté Terramax 26 Rear Wheel with Disc Hub",
        "price": 89.99,
        "build": []
      }
    }
  },

  "part_type": {
    "82":{
      "name": "Tires",
      "_id": new ObjectID("000000000000000000000082")
    },
    "83":{
      "name": "Front Wheel",
      "_id": new ObjectID("000000000000000000000083")
    },
    "84":{
      "name": "Fork",
      "_id": new ObjectID("000000000000000000000084")
    },
    "85":{
      "name": "Shock",
      "_id": new ObjectID("000000000000000000000085")
    },
    "86":{
      "name": "Handlebar",
      "_id": new ObjectID("000000000000000000000086")
    },
    "87":{
      "name": "Saddle",
      "_id": new ObjectID("000000000000000000000087")
    },
    "88":{
      "name": "Seatpost",
      "_id": new ObjectID("000000000000000000000088")
    },
    "89":{
      "name": "Frame",
      "_id": new ObjectID("000000000000000000000089")
    },
    "90":{
      "name": "Brakes",
      "_id": new ObjectID("000000000000000000000090")
    },
    "91":{
      "name": "Rear Derailleur",
      "_id": new ObjectID("000000000000000000000091")
    },
    "92":{
      "name": "Front Derailleur",
      "_id": new ObjectID("000000000000000000000092")
    },
    "93":{
      "name": "Chain",
      "_id": new ObjectID("000000000000000000000093")
    },
    "94":{
      "name": "Shifter",
      "_id": new ObjectID("000000000000000000000094")
    },
    "95":{
      "name": "Rear Wheel",
      "_id": new ObjectID("000000000000000000000095")
    }
  }
};

/**
 * Resets a collection.
 */
function resetCollection(db, name, cb) {
  // Drop / delete the entire object collection.
  db.collection(name).drop(function() {
    // Get all of the mock objects for this object collection.
    var collection = initialData[name];
    var objects = Object.keys(collection).map(function(key) {
      return collection[key];
    });
    // Insert objects into the object collection.
    db.collection(name).insertMany(objects, cb);
  });
}

/**
 * Reset the MongoDB database.
 * @param db The database connection.
 */
function resetDatabase(db, cb) {
  // The code below is a bit complex, but it basically emulates a
  // "for" loop over asynchronous operations.
  var collections = Object.keys(initialData);
  var i = 0;

  // Processes the next collection in the collections array.
  // If we have finished processing all of the collections,
  // it triggers the callback.
  function processNextCollection() {
    if (i < collections.length) {
      var collection = collections[i];
      i++;
      // Use myself as a callback.
      resetCollection(db, collection, processNextCollection);
    } else {
      cb();
    }
  }

  // Start processing the first collection!
  processNextCollection();
}

// Check if called directly via 'node', or required() as a module.
// http://stackoverflow.com/a/6398335
if(require.main === module) {
  // Called directly, via 'node src/resetdatabase.js'.
  // Connect to the database, and reset it!
  var MongoClient = require('mongodb').MongoClient;
  var url = 'mongodb://localhost:27017/' + databaseName;
  MongoClient.connect(url, function(err, db) {
    if (err) {
      throw new Error("Could not connect to database: " + err);
    } else {
      console.log("Resetting database...");
      resetDatabase(db, function() {
        console.log("Database reset!");
        // Close the database connection so NodeJS closes.
        db.close();
      });
    }
  });
} else {
  // require()'d.  Export the function.
  module.exports = resetDatabase;
}
