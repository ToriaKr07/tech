const express = require('express');
const app = express();
const port = 3000;

app.get('/toria', (req, res) => {
  res.send('Hallo Toria!')
})

app.get('/user', (req, res) => {
  res.send('Hallo user!')
})

app.set('view engine', 'ejs');

app.get('/toria', toonToria)
app.get("/film", toonFilm);

app.listen(port, () => {
  console.log(`Server draait op http://localhost:${port}`);
});

const movies = [
  { title: 'Redemption', story: 'A fantastic movie' }
];

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

function toonToria(req, res) {
    res.send("Hallo Toria")
}

async function toonFilm(req, res) {
    let movie = {
        title: "Shawshank!",
        description: "Dit is een film.",
    }
    res.render("film", {data: movie});
}

app.get('/', (req, res) => {
  res.render('pages/index', { movies });
});

app.post('/', (req, res) => {
  movies.push({
    title: req.body.title,
    story: req.body.story
  });

  res.render('pages/index', { movies: movies});
});