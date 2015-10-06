var pg = require('pg');

var DB = function() {
  this.client = null;
  this.done = null;

  this.deferreds = [];
}

DB.prototype.connect = function(url) {
  pg.connect(url, function(err, client, done) {
    if (err) {
      // return console.error('error fetching client from pool', err);
    }
    this.client = client;
    this.done = done;

    this.notifyListeners(client);

  //TODO rm
    console.log('client connected');

  }.bind(this));

};

DB.prototype.close = function() {
  if (this.done) {
    this.done();
  }
};

DB.prototype.getClient = function(callback) {
  if(this.client) {
    callback(this.client);
  } else {
    this.deferreds.push(callback);
  }
};

DB.prototype.notifyListeners = function(client) {
  this.deferreds.forEach(function (callback) {
    callback(client);
  });
};

var db = new DB();

module.exports = db;