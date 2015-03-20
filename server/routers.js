var router = require('express').Router();
var db = require('./db');


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
  console.log(req.params.cat);

  
  db.Categories.find({where: {api: req.params.cat}}).complete(function(err, results){
    console.log(results);
    var id = 0;
    if(results){
      id = results.id;
    }
    db.Categories.findAll({where: {parent: id}}).complete(function(err, results){
      console.log(results);
      
      if(results.length !== 0){
        res.json(strip(results));
      }else{
        res.json({results: [{name: 'test1', otherinfo: 'testing'}, {name: 'test2', otherinfo: 'testing'}]});
      }
    });
  });
});

module.exports = router;