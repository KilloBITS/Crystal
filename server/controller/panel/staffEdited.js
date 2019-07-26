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
      const staff = db.collection("staff");
      if (err) return console.log(err);

      staff.find().toArray(function(err, results_staff) {
        res.send({data: results_staff})
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
      const services = db.collection("staff");
      if (err) return console.log(err);
      services.updateOne({AI: parseInt(0) },{ $set: {title: req.body.data[0].title, staffData: req.body.data[0].staffData } });

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

var addNewStaff = (req, res, next) => {
  // if(req.session !== undefined && req.session.user_id !== undefined){
    mongoClient.connect('mongodb://localhost:27017/', function(err, client) {
      const db = client.db("CRISTALL");
      const staff = db.collection("staff");
      if (err) return console.log(err);

      staff.find().toArray(function(err, results_staff) {
        var myStafs = results_staff[0];
        myStafs.staffData.push({
          AI: req.body.new.AI,
          title: req.body.new.title,
          photoOne:"/staff/"+ (parseInt(req.body.new.AI)+1)+"-1.jpg",
          photoTwo:"/staff/"+ (parseInt(req.body.new.AI)+1)+"-2.jpg",
          text: req.body.new.text,
          fulltext: req.body.new.fulltext,
          insta: req.body.new.insta,
          email: req.body.new.email,
          facebook: req.body.new.facebook
        });

        var photoOne = req.body.new.photoOne.replace(/^data:image\/(png|gif|jpeg|jpg);base64,/,'');
        var photoTwo = req.body.new.photoTwo.replace(/^data:image\/(png|gif|jpeg|jpg);base64,/,'');
        fs.writeFile(global.folders.staffs + "/"+ (parseInt(req.body.new.AI)+1) +"-1.jpg", photoOne, 'base64', function(err1){
          console.log(err1)
          fs.writeFile(global.folders.staffs + "/"+ (parseInt(req.body.new.AI)+1) +"-2.jpg", photoTwo, 'base64', function(err2){

          });
        });


        staff.updateOne({AI: parseInt(0) },{ $set: {staffData: myStafs.staffData } });
        res.send({
          code: 200,
          className: 'nSuccess'
        });
      })
    });
  // }else{
  //   res.send({
  //     code: 403,
  //     className: 'nWarning',
  //     message: 'У вас нет доступа к данным действиям!'
  //   });
  // }
}

router.post('/getstaffEdited', getdata);
router.post('/savestaffEdited', savedata);
router.post('/addNewStaff', addNewStaff);

module.exports = router;
