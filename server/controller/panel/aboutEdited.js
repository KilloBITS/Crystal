'use strict';
const express = require('express');
const router = express.Router();
const mongoClient = require("mongodb").MongoClient;
const bParser = require('body-parser');
const fs = require("fs");

var getdata = (req, res, next) => {
  // if(req.session !== undefined && req.session.user_id !== undefined){
    mongoClient.connect('mongodb://localhost:27017/', function(err, client) {
      const db = client.db("CRISTALL");
      const about = db.collection("about");
      if (err) return console.log(err);

      about.find().toArray(function(err, results_about) {
        res.send({data: results_about})
      })
    });
  // }else{
  //   res.send({
  //     code: 403,
  //     className: 'nWarning',
  //     message: 'У вас нет доступа к данным действиям!'
  //   });
  // }
};

var savedata = (req, res, next) => {
  // console.log(req.body.data)
  // if(req.session !== undefined && req.session.user_id !== undefined){
    mongoClient.connect('mongodb://localhost:27017/', function(err, client) {
      const db = client.db("CRISTALL");
      const about = db.collection("about");
      if (err) return console.log(err);
      req.body.data.forEach((a) => {
        console.log(a)
        about.updateOne({AI: parseInt(a.AI) },{ $set: {title: a.title, text: a.text, fulltext: a.fulltext } });
      });
      res.send({
        code: 200,
        className: 'nSuccess'
      });
    });
  // }else{
  //   res.send({
  //     code: 403,
  //     className: 'nWarning',
  //     message: 'У вас нет доступа к данным действиям!'
  //   });
  // }
};

router.post('/getaboutEdited', getdata);
router.post('/saveaboutEdited', savedata);

module.exports = router;