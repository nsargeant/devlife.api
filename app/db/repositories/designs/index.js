'use strict';

var Repository = require('../abstractRepository');

function DesignsRepository() {
  Repository.call(this);
}

DesignsRepository.prototype.selectAll = function(callback) {
  this.client.query('SELECT * FROM designs ORDER BY designs.name', callback);
};

DesignsRepository.prototype.create = function(design, callback) {
  this.client.query('INSERT INTO designs VALUES($1,$2,$3,$4,$5,$6)', design.toDBArray(), callback);
};

DesignsRepository.prototype.select = function(id, callback) {
  // this.client.query('SELECT * FROM designs LEFT OUTER JOIN criteria ON (designs.criteria = criteria.id) WHERE designs.id = $1', [id], callback);
  this.client.query('SELECT * FROM designs WHERE designs.id = $1', [id], callback);
};

DesignsRepository.prototype.update = function(design, callback) {
  this.client.query('UPDATE designs SET name = $2, description = $3, image = $4, criteria_id = $5, issuer_id = $6 WHERE designs.id = $1', design.toDBArray(), callback);
};

DesignsRepository.prototype.delete = function(id, callback) {
  this.client.query('DELETE FROM designs WHERE designs.id = $1', [id], callback);
};

module.exports = DesignsRepository;