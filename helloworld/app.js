var express = require('express');
var app = express();

app.get('/', function(request, response) {

  //Uses Express API
  //response.send('Hello World');

  //Uses Node API
  response.write('Hello World');
  reponse.end();
});

app.get('/blocks', function(request, response) {
  var blocks = ['Fixed', 'Movable', 'Rotating'];

  //response converts automatically the array to json
  // response.send(blocks);

  //response forces json conversion
  // response.json(blocks);

  //redirects to /parts with default status code 302 (Moved temporarily)
  // response.redirect('/parts');

  //redirects to /parts with status code 301 (Moved permanently)
  response.redirect(301, '/parts');

});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});
