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
      fs.writeFile(global.folders.headers + '/' + randomstring + '.jpg', base64Data, 'base64', function(err) {
        head.updateOne({AI: 0},{ $set: { background:  '/images/header/' + randomstring + '.jpg'}});
        res.send({
          code: 200,
          className: 'nSuccess',
          image: '/images/header/' + randomstring + '.jpg'
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
      let imageName = results_head[0].background.split('/header/')[1]
      fs.unlink(global.folders.headers + '/' + imageName, function(err){
        if(err) return console.log(err);
        head.updateOne({AI: parseInt(0) },{ $set: {background: ''} });
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
