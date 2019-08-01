'use strict';
const express = require('express');
const router = express.Router();
const mongoClient = require("mongodb").MongoClient;
const bParser = require('body-parser');
const fs = require("fs");
const ParseSession = require('../system/parseSession');
var multer = require('multer')
var cors = require('cors');
router.use(cors());

var storage = multer.diskStorage({
      destination: function (req, file, cb) {
      cb(null, 'data/images/gallery')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' +file.originalname )
    }
})

var upload = multer({ storage: storage }).array('file')

var getgalleryEdited = (req, res, next) => {
  if(new ParseSession(req, res)){
    mongoClient.connect('mongodb://localhost:27017/', function(err, client) {
      const db = client.db("CRISTALL");
      const gallery = db.collection("gallery");
      if (err) return console.log(err);

      gallery.find().toArray(function(err, results_gallery) {
        fs.readdir(global.folders.gallery+"/", function (err, files) {
          res.send({data: results_gallery, images: files})
        });
      })
    });
  }
};

var newGalleryPhoto = (req, res, next) => {
  if(new ParseSession(req, res)){
    upload(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                return res.status(500).json(err)
            } else if (err) {
                return res.status(500).json(err)
            }
       return res.status(200).send(req.file)
     })
  }
};

var removeGalleryPhoto = (req, res, next) => {
  if(new ParseSession(req, res)){
    fs.unlink(global.folders.gallery + '/' + req.body.image, function(err){
      if(err) return console.log(err);
      res.send({
        code: 200,
        className: 'nSuccess'
      });
    });
  }
}

router.post('/getgalleryEdited', getgalleryEdited);
router.post('/newGalleryPhoto', newGalleryPhoto);
router.post('/removeGalleryPhoto', removeGalleryPhoto);

module.exports = router;
