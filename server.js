const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.json());
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.render('pages/form')
})
app.get('/game', (req, res) => {
  res.render('pages/game')
})
app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})