const express = require('express');
const path = require('path');
const bParser = require('body-parser');
const cParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const app = express();

let sessionParser = session({
  secret: '2C44-4D44-WppQ38S',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({
    url: 'mongodb://localhost:27017/CRISTALL'
  }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 * 2 // two weeks
  }
});
app.use(sessionParser);

//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(bParser.urlencoded({limit: '50mb'}));
app.use(bParser.json());
app.use(allowCrossDomain);
app.use(express.static(path.join(__dirname, '../build')));
app.use(express.static(path.join(__dirname, './data/')));

const message =  require('./controller/message_controller');
const saveEmail =  require('./controller/saveEmail');
app.post('/postMessage', message);
app.post('/saveEmail', saveEmail);

const getData =  require('./controller/get_data');
app.post('/getData', getData);

app.get('/*', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(5002, function(){
  console.warn('Server started from port 5002');
});
