'use strict';
const express = require('express');
const router = express.Router();
const mongoClient = require("mongodb").MongoClient;
const bParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fs = require("fs");

router.use(cookieParser());

let GlobalData = {}

let getdata = (req, res, next) => {
  console.log(req.session.user_id);
  mongoClient.connect('mongodb://localhost:27017/', function(err, client) {
    const db = client.db("CRISTALL");
    const config = db.collection("config");
    const head = db.collection("head");
    const about = db.collection("about");
    const services = db.collection("services");
    const staff = db.collection("staff");
    const contacts = db.collection("contacts");
    const gallery = db.collection("gallery");
    if (err) return console.log(err);

    config.find().toArray(function(err, results_config) {
      head.find().toArray(function(err, results_head) {
        about.find().toArray(function(err, results_about) {
          services.find().toArray(function(err, results_services) {
            staff.find().toArray(function(err, results_staff) {
              contacts.find().toArray(function(err, results_contacts) {
                gallery.find().toArray(function(err, results_gallery) {
                  fs.readdir(global.folders.gallery+"/", function (err, files) {
                    results_gallery[0].images = files;
                    GlobalData = {
                      header: results_head[0],
                      about: results_about[0],
                      services: results_services[0],
                      gallery: results_gallery[0],
                      staff: results_staff[0],
                      constacts: results_contacts[0]
                    }
                    GlobalData.isAdmin = true;//(req.session.user_id !== undefined)?true:false;
                    res.send({code: 500, data: GlobalData});
                  });
                })
              });
            });
          });
        });
      });
    });
  });


};

router.post('/getData', getdata);


module.exports = router;
