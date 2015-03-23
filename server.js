
var app = require('./server/app');


//----------//
// Warnings //
//----------//

if(process.env.oauth_consumer_key === undefined){
  console.log('WARNING:  `process.env.oauth_consumer_key` is not set!');
}

if(process.env.oauth_token === undefined){
  console.log('WARNING:  `process.env.oauth_consumer_key` is not set!');
}

if(process.env.consumerSecret === undefined){
  console.log('WARNING:  `process.env.consumerSecret` is not set!');
}

if(process.env.tokenSecret === undefined){
  console.log('WARNING:  `process.env.tokenSecret` is not set!');
}


app.listen(app.get('port'));
console.log('Listening on', app.get('port'));