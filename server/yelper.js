// Yelp API Caller

var oauthSignature = require('oauth-signature');
var n = require('nonce')();
var request = require('request');
var qs = require('querystring');
var _ = require('lodash');

var request_yelp = function(set_parameters, callback) {
  'use strict';
  var httpMethod = 'GET';
  var url = 'http://api.yelp.com/v2/search';
  
  var default_parameters = {
    location: 'San+Francisco',
    sort: '2'
  };

  var required_parameters = {
    oauth_consumer_key : process.env.oauth_consumer_key || '5vqhWS7N458VxObbh8FkZA',
    oauth_token : process.env.oauth_token || 'YqLN73KG_trkg5IELGG90WJt0IsERj4U',
    oauth_nonce : n(),
    oauth_timestamp : n().toString().substr(0,10),
    oauth_signature_method : 'HMAC-SHA1',
    oauth_version : '1.0'
  };

  var parameters = _.assign(default_parameters, set_parameters, required_parameters);

  var consumerSecret = process.env.customerconsumerSecret || 'k2r5YixvkE8YfwvcZ0JpSi6Rj_o';
  var tokenSecret = process.env.tokenSecret || 'k6PDzaFsgQRjvgM7eDmCMhl08bI';
  var signature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret, { encodeSignature: false});

  parameters.oauth_signature = signature;
  var paramURL = qs.stringify(parameters);

  var apiURL = url+'?'+paramURL;

  console.log(apiURL);

  request(apiURL, function(error, response, body){
    return callback(error, response, body);
  });

};

var list_hoods = function(set_parameters, callback) {
  'use strict';
  var hoods = [];
  request_yelp(set_parameters, function(err, response, body){
    var batch_1 = JSON.parse(body);
    _.forEach(batch_1.businesses, function(value) {
      if(value.location.neighborhoods){
        hoods = hoods.concat(value.location.neighborhoods);
      }
    });

    // Get 20-40 as well

    // set_parameters.offset = 20;
    // request_yelp(set_parameters, function(err, response, body){
    //   var batch_1 = JSON.parse(body);
    //   _.forEach(batch_1.businesses, function(value) {
    //     if(value.location.neighborhoods){
    //       hoods = hoods.concat(value.location.neighborhoods);
    //     }
    //   });
    //
    //   callback(_.uniq(hoods));
    // });

    callback(_.uniq(hoods));
  });

};

exports.request_yelp = request_yelp;
exports.list_hoods = list_hoods;
