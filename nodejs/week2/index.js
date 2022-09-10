const { Router } = require('express');
const express = require('express');
const app = express();
const router = express.Router();
app.get('/', (req, res) => res.send('nodejs week2 homework'));

app.get('/numbers/add', (req, res) => {
  console.log(req.query);
  res.send(String(Number(req.query.first) + Number(req.query.second)));
});

app.get('/numbers/multiply/:first/:second', (req, res) => {
  console.log(req.params);
  res.send(String(Number(req.params.first) * Number(req.params.second)));
});
app.use('/about', router);
app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
