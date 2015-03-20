var Sequelize = require('sequelize');
var dbconfig = require('./pw.js');

var orm = new Sequelize(dbconfig.database, dbconfig.username, dbconfig.password);

var Categories = orm.define('categories', {
  api: {type: Sequelize.STRING, defaultValue: 'anonymous'},
  display: Sequelize.STRING,
  parent: {type: Sequelize.INTEGER, defaultValue: 0}
});

Categories.sync();

exports.Categories = Categories;