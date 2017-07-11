const express = require('express');

//Lets you build dynamic templates, loads hbs module
const hbs = require('hbs');

var app = express();

//Register the path to partials templates for hbs
hbs.registerPartials(__dirname + '/views/partials');

//Assigns 'hbs' to value 'view engine' on the app settings table
app.set('view engine', 'hbs');

//Takes the absolute path to the folder 'public'
//This way, typing localhost:3000/help.html will load our html file from 'public'
app.use(express.static(__dirname + '/public'));

app.get('/about', (request, response) => {

  //'views' is the default directory that ExpressJS uses for templates
  //'render' loads .hbs files from 'views folder' passing arguments through a json (optional)
  response.render('about.hbs', {
    pageTitle : 'About',
    currentYear : new Date().getFullYear()
  });
});

app.get('/', (request, response) => {
  response.render('home.hbs', {
    pageTitle : 'Home',
    welcomeMessage : 'Welcome to my this',
    currentYear : new Date().getFullYear()
  });
})

app.listen(3000, function() {
  console.log('Listening on port 3000');
});
