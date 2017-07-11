const express = require('express');

//Lets you build dynamic templates, loads hbs module
const hbs = require('hbs');

var app = express();

//Assigns 'hbs' to value 'view engine' on the app settings table
app.set('view engine', 'hbs');

//Takes the absolute path to the folder 'public'
//This way, typing localhost:3000/help.html will load our html file from 'public'
app.use(express.static(__dirname + '/public'));

app.get('/about', (request, response) => {

  //'views' is the default directory that ExpressJS uses for templates
  //'render' loads .hbs files from 'views folder'
  response.render('about.hbs');
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});
