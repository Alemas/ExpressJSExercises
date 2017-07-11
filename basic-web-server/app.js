const express = require('express');

//Lets you build dynamic templates, loads hbs module
const hbs = require('hbs');

var app = express();

//Register the path to partials templates for hbs
hbs.registerPartials(__dirname + '/views/partials');

//Registers the function getFullYear to be called in any template
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});

//Registers a function that receives a string and return it all uppercase
hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

//Assigns 'hbs' to value 'view engine' on the app settings table
app.set('view engine', 'hbs');

//Takes the absolute path to the folder 'public'
//This way, typing localhost:3000/help.html will load our html file from 'public'
app.use(express.static(__dirname + '/public'));

app.get('/about', (request, response) => {

  //'views' is the default directory that ExpressJS uses for templates
  //'render' loads .hbs files from 'views folder' passing arguments through a json (optional)
  response.render('about.hbs', {
    pageTitle : 'About'
  });
});

app.get('/', (request, response) => {
  response.render('home.hbs', {
    pageTitle : 'Home',
    welcomeMessage : 'Welcome to this thing'
  });
})

app.listen(3000, function() {
  console.log('Listening on port 3000');
});
