const express = require('express');
const path = require('path');
const bParser = require('body-parser');
const cParser = require('cookie-parser');
const fs = require("fs");
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
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);
// app.use(express.json({limit: '50mb'}));


app.use(express.urlencoded({limit: '50mb'}));
app.use(bParser.urlencoded( {limit: '50mb', extended: true} ));
app.use(bParser.json({limit: '50mb', extended: true}));
// app.use(cParser());
app.use(express.static(path.join(__dirname, '../build')));
app.use(express.static(path.join(__dirname, './data/')));

const message =  require('./controller/global/message_controller');

const saveEmail =  require('./controller/global/saveEmail');
app.post('/postMessage', message);
app.post('/saveEmail', saveEmail);

const getData =  require('./controller/global/get_data');
app.post('/getData', getData);

/** Авторизация **/
const signin =  require('./controller/global/signin');
app.post('/signin', signin);

/** Panel **/
const staffEdited =  require('./controller/panel/staffEdited');
app.post('/getstaffEdited', staffEdited);
app.post('/savestaffEdited', staffEdited);
app.post('/addNewStaff', staffEdited);
app.post('/removeStaff', staffEdited);
app.post('/setNewImageUserOne', staffEdited);
app.post('/setNewImageUserTwo', staffEdited);

const servicesEdited =  require('./controller/panel/servicesEdited');
app.post('/getservicesEdited', servicesEdited);
app.post('/saveservicesEdited', servicesEdited);
app.post('/addNewService', servicesEdited);

const headEdited =  require('./controller/panel/headEdited');
app.post('/getheadEdited', headEdited);
app.post('/saveheadEdited', headEdited);
app.post('/removeHeadPhoto', headEdited);

const galleryEdited =  require('./controller/panel/galleryEdited');
app.post('/getgalleryEdited', galleryEdited);
app.post('/newGalleryPhoto', galleryEdited);
app.post('/removeGalleryPhoto', galleryEdited);

const contactsEdited =  require('./controller/panel/contactsEdited');
app.post('/getcontactsEdited', contactsEdited);
app.post('/savecontactsEdited', contactsEdited);

const aboutEdited =  require('./controller/panel/aboutEdited');
app.post('/getaboutEdited', aboutEdited);
app.post('/saveaboutEdited', aboutEdited);
app.post('/changeAboutImageOne', aboutEdited);
app.post('/changeAboutImageOne', aboutEdited);
app.post('/changeOnlineChecker', aboutEdited);

const usersEdited =  require('./controller/panel/usersPanel');
app.post('/getUsersData', usersEdited);


app.get('/*', function (req, res) {
  if(fs.existsSync(path.join(__dirname, '../build', 'index.html'))){
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  }else{
    res.sendFile(path.join(__dirname, '../pages', 'update.html'));
  }
});

app.listen(5002, function(){

  global.folders = {
    headers: __dirname + '/data/images/header',
    staffs: __dirname + '/data/images/staff',
    icons: __dirname + '/data/images/icons',
		images: __dirname + '/data/images',
    gallery: __dirname + '/data/images/gallery'

	}
  console.warn('Server started from port 5002');
});
