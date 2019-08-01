'use strict';
const express = require('express');
const router = express.Router();
const mongoClient = require("mongodb").MongoClient;
const bParser = require('body-parser');
const fs = require("fs");
const ParseSession = require('../system/parseSession');

var getUsersData = (req, res, next) => {
  if(new ParseSession(req, res)){
    mongoClient.connect('mongodb://localhost:27017/', function(err, client) {
      const db = client.db("CRISTALL");
      const users = db.collection("users");
      if (err) return console.log(err);

      users.find().toArray(function(err, results_users) {
        res.send({data: results_users})
      })
    });
  }
};



router.post('/getUsersData', getUsersData);


module.exports = router;
