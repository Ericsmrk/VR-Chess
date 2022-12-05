// Load required modules
const http = require("http");                 // http server core module
const path = require("path");
const express = require("express");           // web framework external module
const socketIo = require("socket.io");        // web socket external module
const easyrtc = require("open-easyrtc");      // EasyRTC external module
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

// Set process name
process.title = "networked-aframe-server";

// Get port or default to 8080
const port = process.env.PORT || 8081;

mongoose.connect('mongodb+srv://chris:vrchess@cluster0.stvm6jy.mongodb.net/registrationFormHeruko?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if (!err) {
    console.log('MongoDB Connection Succeeded.');
  } else {
    console.log('Error in DB connection : ' + err);
  }
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
});

// Setup and configure Express http server.
const app = express();

// Serve the bundle in-memory in development (needs to be before the express.static)
if (process.env.NODE_ENV === "development") {
  const webpackMiddleware = require("webpack-dev-middleware");
  const webpack = require("webpack");
  const config = require("../webpack.config");

  app.use(
    webpackMiddleware(webpack(config), {
      publicPath: "/dist/"
    })
  );
}

app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));

// Serve the files from the examples folder
app.use(express.static(path.resolve(__dirname, "..", "examples")));

app.set('views', path.join(__dirname, "..", 'views'));
app.set('view engine', 'ejs');	

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var index = require('../routes/index');
app.use('/', index);

// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

// Start Express http server
const webServer = http.createServer(app);

// Start Socket.io so it attaches itself to Express server
const socketServer = socketIo.listen(webServer, {"log level": 1});
const myIceServers = [
  {"urls":"stun:stun1.l.google.com:19302"},
  {"urls":"stun:stun2.l.google.com:19302"},
  // {
  //   "urls":"turn:[ADDRESS]:[PORT]",
  //   "username":"[USERNAME]",
  //   "credential":"[CREDENTIAL]"
  // },
  // {
  //   "urls":"turn:[ADDRESS]:[PORT][?transport=tcp]",
  //   "username":"[USERNAME]",
  //   "credential":"[CREDENTIAL]"
  // }
];
easyrtc.setOption("appIceServers", myIceServers);
easyrtc.setOption("logLevel", "debug");
easyrtc.setOption("demosEnable", false);

// Overriding the default easyrtcAuth listener, only so we can directly access its callback
easyrtc.events.on("easyrtcAuth", (socket, easyrtcid, msg, socketCallback, callback) => {
    easyrtc.events.defaultListeners.easyrtcAuth(socket, easyrtcid, msg, socketCallback, (err, connectionObj) => {
        if (err || !msg.msgData || !msg.msgData.credential || !connectionObj) {
            callback(err, connectionObj);
            return;
        }

        connectionObj.setField("credential", msg.msgData.credential, {"isShared":false});

        console.log("["+easyrtcid+"] Credential saved!", connectionObj.getFieldValueSync("credential"));

        callback(err, connectionObj);
    });
});

// To test, lets print the credential to the console for every room join!
easyrtc.events.on("roomJoin", (connectionObj, roomName, roomParameter, callback) => {
    console.log("["+connectionObj.getEasyrtcid()+"] Credential retrieved!", connectionObj.getFieldValueSync("credential"));
    easyrtc.events.defaultListeners.roomJoin(connectionObj, roomName, roomParameter, callback);
});

// Start EasyRTC server
easyrtc.listen(app, socketServer, null, (err, rtcRef) => {
    console.log("Initiated");
    // console.log("listening on http://localhost:" + port);

    rtcRef.events.on("roomCreate", (appObj, creatorConnectionObj, roomName, roomOptions, callback) => {
        console.log("roomCreate fired! Trying to create: " + roomName);

        appObj.events.defaultListeners.roomCreate(appObj, creatorConnectionObj, roomName, roomOptions, callback);
    });
});


// Listen on port
app.listen(port, () => {
    console.log("listening on http://localhost:" + port);
})