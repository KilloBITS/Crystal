'use strict';
const express = require('express');
const router = express.Router();
const mongoClient = require("mongodb").MongoClient;
const bParser = require('body-parser');
const fs = require("fs");
const ParseSession = require('../system/parseSession');

var getaboutEdited = (req, res, next) => {
  if(new ParseSession(req, res)){
    mongoClient.connect('mongodb://localhost:27017/', function(err, client) {
      const db = client.db("CRISTALL");
      const about = db.collection("about");
      if (err) return console.log(err);

      about.find().toArray(function(err, results_about) {
        res.send({data: results_about})
      })
    });
  }
};

var saveaboutEdited = (req, res, next) => {
  if(new ParseSession(req, res)){
    mongoClient.connect('mongodb://localhost:27017/', function(err, client) {
      const db = client.db("CRISTALL");
      const about = db.collection("about");
      if (err) return console.log(err);

      about.updateOne({AI: parseInt(0) },{
        $set: {
          title: req.body.data[0].title,
          minitext: req.body.data[0].minitext,
          minitext2: req.body.data[0].minitext2,
          insta: req.body.data[0].insta,
          facebook: req.body.data[0].facebook,
          email: req.body.data[0].email,
          viber: req.body.data[0].viber
        }
      });
      res.send({
        code: 200,
        className: 'nSuccess'
      });
    });
  }
};

var selectHewAboutImageOne = (req, res, next) => {
  if(new ParseSession(req, res)){
    var photo = req.body.image.replace(/^data:image\/(png|gif|jpeg|jpg);base64,/,'');
    fs.writeFile(global.folders.images + "/bg1.png", photo, 'base64', function(err){
      console.log(err);
      res.send({
        code: 200,
        className: 'nSuccess'
      });
    })
  }
}

var selectHewAboutImageTwo = (req, res, next) => {
  if(new ParseSession(req, res)){
    var photo = req.body.image.replace(/^data:image\/(png|gif|jpeg|jpg);base64,/,'');
    fs.writeFile(global.folders.images + "/bg2.png", photo, 'base64', function(err){
      console.log(err);
      res.send({
        code: 200,
        className: 'nSuccess'
      });
    })
  }
}

var changeOnlineChecker  = (req, res, next) => {
  if(new ParseSession(req, res)){
    mongoClient.connect('mongodb://localhost:27017/', function(err, client) {
      const db = client.db("CRISTALL");
      const about = db.collection("about");
      if (err) return console.log(err);

      about.updateOne({AI: parseInt(0) },{
        $set: {
          writeOnline: req.body.writeOnline
        }
      });
      res.send({
        code: 200,
        className: 'nSuccess'
      });
    });
  }
}

router.post('/getaboutEdited', getaboutEdited);
router.post('/saveaboutEdited', saveaboutEdited);
router.post('/changeAboutImageOne', selectHewAboutImageOne);
router.post('/changeAboutImageTwo', selectHewAboutImageTwo);
router.post('/changeOnlineChecker', changeOnlineChecker);

module.exports = router;
