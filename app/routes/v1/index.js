var express = require('express'),
  designs = require('./resources/designs');

var v1 = express();

v1.use('/designs', designs);

module.exports = v1;