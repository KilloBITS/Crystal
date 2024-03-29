'use strict';
const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'cristall.bot.site@gmail.com',
		pass: 'cristallbot0907'
	}
});

let postMessage = (req, res, next) => {
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();

	today = mm + '/' + dd + '/' + yyyy;

  let data = req.body.text;
  let message = '• '+data.firstName + ' ' + data.lastName +' • \n \n' +
                +data.phone+
                +data.text
  let mailOptions = {
      from: "cristall.bot.site@gmail.com", // sender address
      to: "kalinich0107@gmail.com", // list of receivers 
      subject: "Сообщение с сайта Cristall ("+ data.email +")", // Subject line
      text: message, // plain text body
  };

  transporter.sendMail(mailOptions);
  res.send({code: 500, txt:'12345'});
};

router.post('/postMessage', postMessage);


module.exports = router;
