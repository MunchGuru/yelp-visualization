
var app = require('./server/app');

app.listen(app.get("port"));
console.log("Listening on", app.get("port"));