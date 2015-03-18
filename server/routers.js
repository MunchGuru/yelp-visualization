// var controllers = require('./controllers');
var router = require('express').Router();
var db = require('./db');

// for (var route in controllers) {
//   router.route('/' + route)
//     .get(controllers[route].get);
// }
// router.route('/').get(controllers.base.get);


router.route('/:cat?').get(function(req, res) {
  var results = [];
  var found = 0;
  db.forEach(function(item){
    if(item.cat === req.params.cat){
      results.push({'display':item.display, 'api': item.api});
    }
    if(item.api === req.params.cat){
      found++;
    }
  });

  if(results.length > 0){
    res.json(results);
  }else{
    if(req.params.cat === 'restaurants'){
      res.writeHead(422, 'use nightlife, not restaurants');
      res.end('use nightlife, not restaurants to test');
    }else if(found > 0){
      res.json([{results: [{name: 'test1', otherinfo: 'testing'}, {name: 'test1', otherinfo: 'testing'}]}]);
    }else{
      res.writeHead(422, 'invalid data');
      res.end('Invalid data');
    }
  }

});

module.exports = router;