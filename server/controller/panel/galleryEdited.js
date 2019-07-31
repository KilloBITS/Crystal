'use strict';
const express = require('express');
const router = express.Router();
const mongoClient = require("mongodb").MongoClient;
const bParser = require('body-parser');
const fs = require("fs");

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

var getdata = (req, res, next) => {
  // if(req.session !== undefined && req.session.user_id !== undefined){
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
  // }else{
  //   res.send({
  //     code: 403,
  //     className: 'nWarning',
  //     message: 'У вас нет доступа к данным действиям!'
  //   });
  // }
};

var newGalleryPhoto = (req, res, next) => {
  upload(req, res, function (err) {
          if (err instanceof multer.MulterError) {
              return res.status(500).json(err)
          } else if (err) {
              return res.status(500).json(err)
          }
     return res.status(200).send(req.file)

   })
  // console.log(req.body.data)
  // if(req.session !== undefined && req.session.user_id !== undefined){
    // mongoClient.connect('mongodb://localhost:27017/', function(err, client) {
    //   const db = client.db("CRISTALL");
    //   const gallery = db.collection("gallery");
    //   if (err) return console.log(err);
    //   req.body.data.forEach((a) => {
    //     console.log(a)
    //     gallery.updateOne({AI: 0},{ $set: {title: a.title, images: a.images } });
    //   });
    //   res.send({
    //     code: 200,
    //     className: 'nSuccess'
    //   });
    // });
  // }else{
  //   res.send({
  //     code: 403,
  //     className: 'nWarning',
  //     message: 'У вас нет доступа к данным действиям!'
  //   });
  // }
};

var removeGalleryPhoto = (req, res, next) => {
// if(req.session !== undefined && req.session.user_id !== undefined){

  fs.unlink(global.folders.gallery + '/' + req.body.image, function(err){
    if(err) return console.log(err);
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
}

router.post('/getgalleryEdited', getdata);
router.post('/newGalleryPhoto', newGalleryPhoto);
router.post('/removeGalleryPhoto', removeGalleryPhoto);

module.exports = router;
