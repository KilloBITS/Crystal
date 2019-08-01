'use strict';
const express = require('express');
const router = express.Router();
const mongoClient = require("mongodb").MongoClient;
const bParser = require('body-parser');
const fs = require("fs");
const ParseSession = require('../system/parseSession');

var getstaffEdited = (req, res, next) => {
  if(new ParseSession(req, res)){
    mongoClient.connect('mongodb://localhost:27017/', function(err, client) {
      const db = client.db("CRISTALL");
      const staff = db.collection("staff");
      if (err) return console.log(err);

      staff.find().toArray(function(err, results_staff) {
        res.send({data: results_staff})
      })
    });
  }
};

var savestaffEdited = (req, res, next) => {
  if(new ParseSession(req, res)){
    mongoClient.connect('mongodb://localhost:27017/', function(err, client) {
      const db = client.db("CRISTALL");
      const staff = db.collection("staff");
      if (err) return console.log(err);
      staff.updateOne({AI: parseInt(0) },{ $set: {title: req.body.data[0].title, staffData: req.body.data[0].staffData } });

      res.send({
        code: 200,
        className: 'nSuccess'
      });
    });
  }
};

var removeStaff = (req, res, next) => {
  if(new ParseSession(req, res)){
    mongoClient.connect('mongodb://localhost:27017/', function(err, client) {
      const db = client.db("CRISTALL");
      const staff = db.collection("staff");
      if (err) return console.log(err);

      staff.find().toArray(function(err, results_staff) {
        var removeStaff = results_staff[0].staffData;
        fs.unlink(global.folders.staffs + removeStaff.find(x => x.AI === parseInt(req.body.AI)).photoOne.split("staff")[1], function(err){
          fs.unlink(global.folders.staffs + removeStaff.find(x => x.AI === parseInt(req.body.AI)).photoTwo.split("staff")[1], function(err){
            removeStaff.splice( removeStaff.findIndex(x => x.AI === parseInt(req.body.AI)) , 1);
            staff.updateOne({AI: parseInt(0) },{ $set: {staffData: removeStaff } });
            res.send({
              code: 200,
              className: 'nSuccess'
            });
          });
        });

      })
    });
  }
};

var addNewStaff = (req, res, next) => {
  if(new ParseSession(req, res)){
    mongoClient.connect('mongodb://localhost:27017/', function(err, client) {
      const db = client.db("CRISTALL");
      const staff = db.collection("staff");
      if (err) return console.log(err);

      staff.find().toArray(function(err, results_staff) {
        var myStafs = results_staff[0];
        var newImageName = (myStafs.staffData.length+1).toString();
        myStafs.staffData.push({
          AI: (myStafs.staffData.length+1),
          title: req.body.new.title,
          photoOne:"/staff/"+ newImageName +"-1.jpg",
          photoTwo:"/staff/"+ newImageName+"-2.jpg",
          text: req.body.new.text,
          fulltext: req.body.new.fulltext,
          insta: req.body.new.insta,
          email: req.body.new.email,
          facebook: req.body.new.facebook
        });

        var photoOne = req.body.new.photoOne.replace(/^data:image\/(png|gif|jpeg|jpg);base64,/,'');
        var photoTwo = req.body.new.photoTwo.replace(/^data:image\/(png|gif|jpeg|jpg);base64,/,'');
        fs.writeFile(global.folders.staffs + "/"+ newImageName +"-1.jpg", photoOne, 'base64', function(err1){
          fs.writeFile(global.folders.staffs + "/"+ newImageName +"-2.jpg", photoTwo, 'base64', function(err2){
            staff.updateOne({AI: parseInt(0) },{ $set: {staffData: myStafs.staffData } });
            res.send({
              code: 200,
              className: 'nSuccess'
            });
          });
        });
      })
    });
  }
}

router.post('/getstaffEdited', getstaffEdited);
router.post('/savestaffEdited', savestaffEdited);
router.post('/addNewStaff', addNewStaff);
router.post('/removeStaff', removeStaff);

module.exports = router;
