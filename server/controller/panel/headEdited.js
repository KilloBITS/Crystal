'use strict';
const express = require('express');
const router = express.Router();
const mongoClient = require("mongodb").MongoClient;
const bParser = require('body-parser');
const fs = require("fs");
const ParseSession = require('../system/parseSession');

var getheadEdited = (req, res, next) => {
  if(new ParseSession(req, res)){
    mongoClient.connect('mongodb://localhost:27017/', function(err, client) {
      const db = client.db("CRISTALL");
      const head = db.collection("head");
      if (err) return console.log(err);

      head.find().toArray(function(err, results_head) {
        res.send({data: results_head})
      })
    });
  }
};

var saveheadEdited = (req, res, next) => {
  if(new ParseSession(req, res)){
    mongoClient.connect('mongodb://localhost:27017/', function(err, client) {
      const db = client.db("CRISTALL");
      const head = db.collection("head");
      if (err) return console.log(err);
      var base64Data = req.body.image.replace(/^data:image\/(png|gif|jpeg|jpg);base64,/,'');
      var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
      var string_length = 64;
      var randomstring = '';
      for (var i=0; i<string_length; i++) {
          var rnum = Math.floor(Math.random() * chars.length);
          randomstring += chars.substring(rnum,rnum+1);
      }
      var imageType = (req.body.type === "background")?'.jpg':'.png';

      fs.writeFile(global.folders.headers + '/' + randomstring + imageType, base64Data, 'base64', function(err) {
        if(req.body.type === "background"){
          head.updateOne({AI: 0},{ $set: { background:  '/images/header/' + randomstring + '.jpg'}});
        }else{
          head.updateOne({AI: 0},{ $set: { modelheader:  '/images/header/' + randomstring + '.png'}});
        }

        res.send({
          code: 200,
          className: 'nSuccess',
          image: '/images/header/' + randomstring + imageType
        });
      });
    });
  }
};


var removeHeadPhoto = (req, res, next) => {
  if(new ParseSession(req, res)){
    mongoClient.connect('mongodb://localhost:27017/', function(err, client) {
      const db = client.db("CRISTALL");
      const head = db.collection("head");
      if (err) return console.log(err);

      head.find().toArray(function(err, results_head) {
        if(req.body.type === "background"){
          var imageName = results_head[0].background.split('/header/')[1]
          head.updateOne({AI: parseInt(0) },{ $set: {background: ''} });
        }else{
          var imageName = results_head[0].modelheader.split('/header/')[1];
          head.updateOne({AI: parseInt(0) },{ $set: {modelheader: ''} });
        }
        fs.unlink(global.folders.headers + '/' + imageName, function(err){
          if(err) return console.log(err);
          console.log(imageName);
          res.send({
            code: 200,
            className: 'nSuccess'
          });
        });
      })
    });
  }
}

router.post('/getheadEdited', getheadEdited);
router.post('/saveheadEdited', saveheadEdited);
router.post('/removeHeadPhoto', removeHeadPhoto);

module.exports = router;
