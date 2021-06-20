const path = require('path');
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
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
    message: "Help I'm an example message, get me out of here"
  })
})

app.get('/weather', (req,res) => {
  res.send({
    forecast: 'Here I am words',
    location: 'hello location location location'
  });
})

app.listen(3000, () => {
  console.log('Server is up on port 3000');
})