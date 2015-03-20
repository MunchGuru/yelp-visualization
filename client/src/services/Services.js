// services.js
// Contains all our utility functions.
// var AppView = require('views/AppView');

define(function(require, exports, module) {
  var Util = {};
  Util.getData = function(url, app, callback) {
		$.ajax(url, {
	    contentType: 'application/json',
	    success: function(response){
	      console.log('Success! ', response);
	      // console.log(app);
	      app[callback](response);
	    },
	    error: function(response) {
	      console.log(response);
	    }
  	});
	};
  Util.post = function(url, data, callback) {
  	$.ajax({
        url: url,
        contentType: 'application/json',
        type: 'POST',
        data: JSON.stringify(data),
        success: callback,
        error: function(err){
          console.log(err);
        }
    });
  };

  module.exports = Util;
});