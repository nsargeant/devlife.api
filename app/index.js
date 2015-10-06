var express = require('express'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
  v1 = require('./routes/v1');

var app = express();
app.use(bodyParser.json());
app.use(cors());
// sign up
// login

// authenticate
app.use('/v1', v1);

// logout

module.exports = app;