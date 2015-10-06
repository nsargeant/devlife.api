var app = require('./app'),
	db = require('./app/db'),
	config = require('./config/config.json');

var server = app.listen(config.port, function () {
  //var host = server.address().address;
  var host = "0.0.0.0";
  var port = server.address().port;

  db.connect(config.db.postgresUrl);

  console.log('Listening at http://%s:%s', host, port);
});