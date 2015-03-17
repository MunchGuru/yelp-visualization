// services.js
// Contains all our utility functions.
define(function(require, exports, module) {
  var Util = {};
  Util.getData = function() {
		$.ajax(url, {
	    contentType: 'application/json',
	    success: function(response){
	      console.log('Success! ', response);
	    },
	    error: function(response) {
	      console.log(response);
	    }
  	});
	};
  // Util.postData = function(data){};
  // etc.

  module.exports = Util;
});