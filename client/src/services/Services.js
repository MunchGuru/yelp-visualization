// services.js
// Contains all our utility functions.
define(function(require, exports, module) {
  var Util = {};
  Util.getData = function(url) {
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
  var post = function(url, data, callback) {
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