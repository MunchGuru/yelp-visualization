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
    oauth_consumer_key : process.env.oauth_consumer_key,
    oauth_token : process.env.oauth_token,
    oauth_nonce : n(),
    oauth_timestamp : n().toString().substr(0,10),
    oauth_signature_method : 'HMAC-SHA1',
    oauth_version : '1.0'
  };

  var parameters = _.assign(default_parameters, set_parameters, required_parameters);

  var consumerSecret = process.env.consumerSecret;
  var tokenSecret = process.env.tokenSecret;
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

    set_parameters.offset = 20;
    request_yelp(set_parameters, function(err, response, body){
      var batch_2 = JSON.parse(body);
      _.forEach(batch_2.businesses, function(value) {
        if(value.location.neighborhoods){
          hoods = hoods.concat(value.location.neighborhoods);
        }
      });
    
      callback(_.uniq(hoods));
    });

  });
};

var list_hoods_data = function(data, cat) {
  'use strict';
  var hoods = [];
  _.forEach(data.businesses, function(value) {
    if(value.location.neighborhoods){
      hoods = hoods.concat(value.location.neighborhoods);
    }
  });

  hoods = _.uniq(hoods);

  _.forEach(hoods, function(value, key) {
    hoods[key] = {
      display: value,
      escape: qs.escape(value),
      uri: '/api/' + cat + '/' + qs.escape(value)
    };
  });

  data.hoods = hoods;
  return data;
};

exports.request_yelp = request_yelp;
exports.list_hoods = list_hoods;
exports.list_hoods_data = list_hoods_data;
