var router = require('express').Router();
var db = require('./db');
var oauthSignature = require('oauth-signature');
var n = require('nonce')();
var request = require('request');



var strip = function(fluff){
  'use strict';
  var results = [];
  fluff.forEach(function(item){
    results.push({'display':item.display, 'api': item.api});
  });
  return results;
};

router.route('/:cat?').get(function(req, res) {
  'use strict';

  
  db.Categories.find({where: {api: req.params.cat}}).complete(function(err, results){
    var id = 0;
    if(results){
      id = results.id;
    }
    db.Categories.findAll({where: {parent: id}}).complete(function(err, results){
      if(results.length !== 0){
        res.json(strip(results));
      }else{
        var httpMethod = 'GET';
        var url = 'http://api.yelp.com/v2/search';
        var parameters = {
                oauth_consumer_key : '5vqhWS7N458VxObbh8FkZA',
                oauth_token : 'YqLN73KG_trkg5IELGG90WJt0IsERj4U',
                oauth_nonce : n(),
                oauth_timestamp : n().toString().substr(0,10),
                oauth_signature_method : 'HMAC-SHA1',
                oauth_version : '1.0',
                category_filter: req.params.cat,
                location: 'San+Francisco',
                sort: '2'
            };
        var consumerSecret = 'k2r5YixvkE8YfwvcZ0JpSi6Rj_o';
        var tokenSecret = 'k6PDzaFsgQRjvgM7eDmCMhl08bI';
        //     // generates a RFC 3986 encoded, BASE64 encoded HMAC-SHA1 hash
        var encodedSignature = oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret);

        var percentEncode = function(s) {
          return encodeURIComponent(s).replace(/\*/g, '%2A');
        };


        var apiURL = url+'?category_filter='+parameters.category_filter+'&sort='+parameters.sort+'&location='+percentEncode(parameters.location)+'&oauth_consumer_key='+parameters.oauth_consumer_key+'&oauth_token='+parameters.oauth_token+'&oauth_signature_method='+parameters.oauth_signature_method+'&oauth_version='+parameters.oauth_version+'&oauth_nonce='+parameters.oauth_nonce+'&oauth_timestamp='+parameters.oauth_timestamp+'&oauth_signature='+encodedSignature;
        
        console.log(apiURL);
        request(apiURL, function(error, response, body){
          if (!error && response.statusCode === 200) {
            res.json(JSON.parse(body));
          }else{
            res.writeHead(422, 'incorrect request');
            res.end('please notify arian about this\n'+body);
          }
        });

      }
    });
  });
});



module.exports = router;