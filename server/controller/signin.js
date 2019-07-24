'use strict';
const express = require('express');
const router = express.Router();
const mongoClient = require("mongodb").MongoClient;
const bParser = require('body-parser');
const cookieParser = require('cookie-parser');

router.use(cookieParser());

var signin = (req, res, next) => {
    mongoClient.connect('mongodb://localhost:27017/', function(err, client) {
      const db = client.db("CRISTALL");
      const signin = db.collection("users");
      if (err) return console.log(err);
      console.log(req.body)
      signin.find({login: req.body.l}).toArray(function(err, results_users) {
        if(results_users.length > 0 && results_users[0].login === req.body.l && results_users[0].password === req.body.p){
          req.session.user_id = results_users[0].login;
          res.send({code: 200});
        }else{
          res.send({code: 300})
        }
      })
    });
};

router.post('/signin', signin);

module.exports = router;
