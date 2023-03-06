const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs',
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'client/pages');

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  const info = require('./db/pagesInfo.json');
  res.render('index.hbs', {
    pages: info.pages,
  });
});

app.get('/zagadkiTunaev', (req, res) => {
  const json = require('./db/zagadkiTunaev.json');
  const info = require('./db/pagesInfo.json');
  res.render('zagadkiTunaev.hbs', {
    data: json,
    info: info.pages.zagadkiTunaev,
  });
});

app.get('/ugadaiPoFraze', (req, res) => {
  const json = require('./db/ugadaiPoFraze.json');
  res.render('ugadaiPoFraze.hbs', {
    data: json,
    score: 10,
  });
});

app.get('/naidiLishnee', (req, res) => {
  const json = require('./db/naidiLishnee.json');
  res.render('naidiLishnee.hbs', {
    data: json,
    score: 10,
  });
});

app.get('/mensItems', (req, res) => {
  const json = require('./db/mensItems.json');
  res.render('mensItems.hbs', {
    data: json,
    score: 40,
  });
});

app.get('/historyOfDate', (req, res) => {
  const json = require('./db/historyOfDate.json');
  res.render('historyOfDate.hbs', {
    data: json,
    score: 40,
  });
});

app.get('/memories', (req, res) => {
  const json = require('./db/memories.json');
  res.render('memories.hbs', {
    data: json,
    score: 20,
  });
});

app.get('/girls', (req, res) => {
  const json = require('./db/girls.json');
  res.render('girls.hbs', {
    data: json,
    score: 10,
    title: 'Девчонки',
  });
});

app.get('/test', (req, res) => {
  res.render('test.hbs');
});

app.get('/login', (req, res) => {
  res.render('login.hbs');
});

app.get('*', (req, res) => {
  res.render(path.resolve(__dirname, 'client', 'pages', 'index.hbs'));
});

function start() {
  try {
    app.listen(PORT, () => {
      console.log('Server has been started on port ' + PORT);
    });
  } catch (e) {
    console.log('SERVER DOESNT STARTED ' + e);
  }
}

start();
