const path = require('path');
const express = require('express');
const hbs = require("hbs");

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Oliver Coldwell'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Oliver Coldwell'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    message: "Help I'm an example message, get me out of here",
    title: "Help",
    name: 'Oliver Coldwell'
  })
})

app.get('/weather', (req,res) => {
  res.send({
    forecast: 'Here I am words',
    location: 'hello location location location'
  });
})

app.get('/help/*', (req,res) => {
  res.render('page404', {
    title: "404",
    errorMessage: "Help article not found.",
    name: "Oliver Coldwell"
  })
})

app.get('*', (req, res) => {
  res.render('page404', {
    title: "404",
    errorMessage: "Page not found.",
    name: "Oliver Coldwell"
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000');
})