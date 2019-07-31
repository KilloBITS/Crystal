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
      const head = db.collection("head");
      if (err) return console.log(err);

      head.find().toArray(function(err, results_head) {
        res.send({data: results_head})
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
  // if(req.session !== undefined && req.session.user_id !== undefined){
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
    // }else{
    //   res.send({
    //     code: 403,
    //     className: 'nWarning',
    //     message: 'У вас нет доступа к данным действиям!'
    //   });
    // }
};


var removeHeadPhoto = (req, res, next) => {
// if(req.session !== undefined && req.session.user_id !== undefined){
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
// }else{
//   res.send({
//     code: 403,
//     className: 'nWarning',
//     message: 'У вас нет доступа к данным действиям!'
//   });
// }
}

router.post('/getheadEdited', getdata);
router.post('/saveheadEdited', savedata);
router.post('/removeHeadPhoto', removeHeadPhoto);

module.exports = router;
