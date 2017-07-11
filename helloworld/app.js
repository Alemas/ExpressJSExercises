//require express library
var express = require('express');

//creates app instance
var app = express();

//sets handler for a HTTP Request
app.get('/', function(request, response) {

  //Uses Express API
  //Sends response to the request
  // response.send('Hello World');

  //Uses Node API
  response.write('Hello World');
  response.end();
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

//Gets called when being redirected by /blocks
app.get('/parts', function(request, response) {

  //Creates json value
  var json = {name : 'Synapps',
              location : 'Tecnopuc'};

  //Sends json as response
  response.send(json);

});

app.get('/bad', function(request, response) {
  var error = {errorMessage : 'Unable to handle request'};
  response.send(error);
});

//Binds application to a port in the machine
app.listen(3000, function() {
  console.log('Listening on port 3000');
});
