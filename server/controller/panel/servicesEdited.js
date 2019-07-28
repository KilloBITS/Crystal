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
      const services = db.collection("services");
      if (err) return console.log(err);

      services.find().toArray(function(err, results_services) {
        res.send({code: 200, data: results_services})
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
      const services = db.collection("services");
      if (err) return console.log(err);
      services.updateOne({AI: parseInt(0) },{ $set: {
          title: req.body.data[0].title,
          text: req.body.data[0].text, 
          myservice: req.body.data[0].myservice
        }
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



var addNewService = (req, res, next) => {
  // if(req.session !== undefined && req.session.user_id !== undefined){
    mongoClient.connect('mongodb://localhost:27017/', function(err, client) {
      const db = client.db("CRISTALL");
      const services = db.collection("services");
      if (err) return console.log(err);

      services.find().toArray(function(err, results_services) {
        var myServices = results_services[0];
        myServices.myservice.push({
          AI: req.body.new.AI,
          title: req.body.new.title,
          text: req.body.new.text,
          icon: '/images/icons/'+req.body.new.AI+".svg"
        });

        var icon = req.body.new.icon;//.replace(/^data:image\/(png|gif|jpeg|jpg|svg+xml);base64,/,'');
        console.log(icon)
        fs.writeFile(global.folders.icons + "/"+ req.body.new.AI +".svg", icon, function(err1){
          services.updateOne({AI: parseInt(0) },{ $set: {myservice: myServices.myservice } });
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

router.post('/getservicesEdited', getdata);
router.post('/saveservicesEdited', savedata);
router.post('/addNewService', addNewService);

module.exports = router;
