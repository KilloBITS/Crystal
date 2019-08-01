'use strict';
const express = require('express');
const router = express.Router();

let saveEmail = (req, res, next) => {
  let data = req.body.text;
  console.log(data);
  res.send({code: 500, txt:'12345'});
};

router.post('/saveEmail', saveEmail);


module.exports = router;
