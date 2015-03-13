var Sequelize = require('sequelize');
var dbconfig = require('./pw');

// var orm = new Sequelize(dbconfig.database, dbconfig.username, dbconfig.password);

// var Test = orm.define('test', {
//   testfield1: {type: Sequelize.STRING, defaultValue: 'anonymous'},
//   testfield2: Sequelize.STRING,
//   testfiled3: {type: Sequelize.INTEGER, defaultValue: 0}
// });

Test.sync();

exports.Test = Test;