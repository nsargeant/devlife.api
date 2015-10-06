var db = require('../index');

function Repository() {
  this.client = null;

  db.getClient(function(client) {
    this.client = client;
  }.bind(this));
}

module.exports = Repository;