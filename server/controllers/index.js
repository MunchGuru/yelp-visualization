var db = require('../db');
var bluebird = require('bluebird');
var Sequelize = require('sequelize');


module.exports = {
  users: {
    get: function (req, res) {
      res.end('WORKS!');
    },
    post: function (req, res) {
      res.end('WORKS!');
    }
  }
};

