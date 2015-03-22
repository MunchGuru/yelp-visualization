var router = require('express').Router();
var db = require('./db');

var yelper = require('./yelper.js');

var strip = function(fluff){
  'use strict';
  var results = [];
  fluff.forEach(function(item){
    results.push({'display':item.display, 'api': item.api});
  });
  return results;
};

router.route('/:cat?/').get(function(req, res) {
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
        yelper.request_yelp({category_filter: req.params.cat}, function(error, response, body){
          if (!error && response.statusCode === 200) {
            res.json(yelper.list_hoods_data(JSON.parse(body)));
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