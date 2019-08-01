'use strict';
const express = require('express');
const router = express.Router();
const mongoClient = require("mongodb").MongoClient;

let saveEmail = (req, res, next) => {
  let data = req.body.text;
  mongoClient.connect('mongodb://localhost:27017/', function(err, client) {
    const db = client.db("CRISTALL");
    const emails = db.collection("emails");
    if (err) return console.log(err);

    emails.find().toArray(function(err, results_emails_length) {
      emails.find({email: data}).toArray(function(err, results_emails) {
        if(results_emails.length === 0){
          emails.insert({AI: results_emails_length.length+1, email: data.valueLine});
        }
        res.send({code: 500, txt:'12345'});
      })
    })
  });
};

router.post('/saveEmail', saveEmail);


module.exports = router;
