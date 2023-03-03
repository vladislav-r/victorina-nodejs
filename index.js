const express = require('express');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 3000;
const app = express();

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs',
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'client/pages');
app.use(express.static(__dirname + '/client'));

app.get('/', (req, res) => {
  res.render('index.hbs');
});

app.get('/zagadkiTunaev', (req, res) => {
  const json = require('./db/zagadkiTunaev.json');
  res.render('zagadkiTunaev.hbs', {
    data: json,
  });
});

app.get('/ugadaiPoFraze', (req, res) => {
  const json = require('./db/ugadaiPoFraze.json');
  res.render('ugadaiPoFraze.hbs', {
    data: json,
  });
});

app.get('/naidiLishnee', (req, res) => {
  const json = require('./db/naidiLishnee.json');
  res.render('naidiLishnee.hbs', {
    data: json,
  });
});

app.get('/mensItems', (req, res) => {
  const json = require('./db/mensItems.json');
  res.render('mensItems.hbs', {
    data: json,
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'pages', 'index.hbs'));
});

function start() {
  try {
    app.listen(PORT, () => {
      console.log('Server has been started on port ' + PORT);
    });
  } catch (e) {
    console.log('Server not started ' + e);
  }
}

start();
