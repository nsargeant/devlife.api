/*
	Designs Service
*/

'use strict';

// var util = require('./util.js'),
var DesignsRepository = require('../../db/repositories/designs');


function DesignsService() {
  this.repository = new DesignsRepository();
}


DesignsService.prototype.selectAll = function(callback) {
  var data = [{
    id: 'someid',
    name: 'More Cowbell',
    src: '',
    availableColors: ['#efefef', 'red']
  }, {
    id: 'someid2',
    name: 'Ship it',
    src: '',
    availableColors: ['#efefef', 'blue']
  }];

  callback(null, data);
  // TODO
  // this.repository.selectAll(function(err, result) {
  //   callback(err, result.rows);
  // });
};

DesignsService.prototype.create = function(reqBody, callback) {
  // var badge = new Badge();
  // badge.assign(reqBody);
  // badge.createNewId();

  this.repository.create(badge, function(err, result) {
    callback(err, badge);
  });
};

DesignsService.prototype.select = function(id, callback) {
  this.repository.select(id, function(err, result) {
    result = result || {
      rows: []
    };
    callback(err, result.rows[0]);
  });
};

DesignsService.prototype.update = function(id, reqBody, callback) {
  // var badge = new Badge();
  // badge.assign(reqBody);
  // badge.id = id;

  this.repository.update(badge, function(err, result) {
    callback(err, result.rowCount);
  });
};

DesignsService.prototype.delete = function(id, callback) {
  this.repository.delete(id, function(err, result) {
    callback(err, result.rowCount);
  });
};


module.exports = DesignsService;