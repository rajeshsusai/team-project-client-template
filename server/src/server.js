// Implement your server in this file.
// We should be able to run your server with node src/server.js
var express = require('express');
var app = express();
var validate = require('express-jsonschema').validate;
var bodyParser = require('body-parser');
var database = require('./database');
var writeDocument = database.writeDocument;
var readDocument= database.readDocument;



app.use(bodyParser.text());
app.use(bodyParser.json());



function updateAccount(userId, fName, lName, email, uName, newPassword){
  var info = readDocument('users',userId);
  info.first_name = fName;
  info.last_name = lName;
  info.email = email;
  info.user_name = uName;
  info.password = newPassword;
  writeDocument('users',info);
  return info;
}

app.listen(3000,function(){
  console.log('Listening on port 3000');
});
