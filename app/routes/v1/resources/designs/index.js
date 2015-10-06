/*
  Designs Resource
*/

'use strict';

var express = require('express');
var DesignsService = require('../../../../services/designs');

var designsResource = express();

var service = new DesignsService();

designsResource.get('/', function(req, res) {
  service.selectAll(function(err, data) {
    if (err) {
      console.error(err);
      res.status(500).send(err.message);
      return;
    }

    res.send(data);
  });

});

designsResource.post('/', function(req, res) {
  service.create(req.body, function(err, data) {
    if (err) {
      console.error(err);
      res.status(500).send(err.message);
      return;
    }

    res.send(data);
  });
});

designsResource.get('/:id', function(req, res) {
  if (!req.params || !req.params.id) {
    res.status(400).send('Malformed request: no id found');
  }

  var callback = function(err, data) {
    if (err) {
      res.status(500).send(err.message);
      console.error(err);
      return;
    }
    if(!data) {
      res.status(404).send('Resource not found');
      return;
    }
    res.send(data);
  };

  service.select(req.params.id, callback);

});

designsResource.put('/:id', function(req, res) {
  if (!req.params || !req.params.id) {
    res.status(400).send('Malformed request: no id found');
  }

  var callback = function(err, data) {
    if (err) {
      res.status(500).send(err.message);
      console.error(err);
      return;
    }
    if(!data) {
      res.status(404).send('Resource not found');
      return;
    }

    res.send('Resource updated successfully');
  };

  service.update(req.params.id, req.body, callback);
});

designsResource.delete('/:id', function(req, res) {
  if (!req.params || !req.params.id) {
    res.status(400).send('Malformed request: no id found');
  }

  var callback = function(err, result) {
    if (err) {
      res.status(500).send(err.message);
      console.error(err);
      return;
    }
    if(!result) {
      res.status(404).send('Resource not found');
    }

    res.send('Resource deleted successfully');
  };

  service.delete(req.params.id, callback);
});

module.exports = designsResource;