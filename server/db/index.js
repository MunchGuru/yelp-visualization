var Sequelize = require('sequelize');
var dbconfig = require('./pw.js');

var orm = new Sequelize(dbconfig.database, dbconfig.username, dbconfig.password, {
  host: dbconfig.hostname
});

var Categories = orm.define('categories', {
  api: {type: Sequelize.STRING},
  display: Sequelize.STRING,
  parent: {type: Sequelize.INTEGER, defaultValue: 0},
  img_url: Sequelize.TEXT
});

Categories.sync();

exports.Categories = Categories;