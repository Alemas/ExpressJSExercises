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
  response.send(blocks);
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});
