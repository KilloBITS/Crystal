'use strict';
const express = require('express');
const router = express.Router();
const mongoClient = require("mongodb").MongoClient;
const bParser = require('body-parser');
const fs = require("fs");
const ParseSession = require('../system/parseSession');

var getcontactsEdited = (req, res, next) => {
  if(new ParseSession(req, res)){
    mongoClient.connect('mongodb://localhost:27017/', function(err, client) {
      const db = client.db("CRISTALL");
      const contacts = db.collection("contacts");
      if (err) return console.log(err);

      contacts.find().toArray(function(err, results_contacts) {
        res.send({data: results_contacts})
      })
    });
  }
};

var savecontactsEdited = (req, res, next) => {
  if(new ParseSession(req, res)){
    mongoClient.connect('mongodb://localhost:27017/', function(err, client) {
      const db = client.db("CRISTALL");
      const contacts = db.collection("contacts");
      if (err) return console.log(err);
      req.body.data.forEach((a) => {
        console.log(a)
        contacts.updateOne({AI: parseInt(a.AI) },{ $set: {title: a.title, text: a.text, fulltext: a.fulltext } });
      });
      res.send({
        code: 200,
        className: 'nSuccess'
      });
    });
  }
};

router.post('/getcontactsEdited', getcontactsEdited);
router.post('/savecontactsEdited', savecontactsEdited);

module.exports = router;
