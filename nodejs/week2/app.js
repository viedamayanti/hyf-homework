const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const doc = require('./documents.json');
// const knex = require("./database")
// Support parsing JSON requests
app.use(express.json()); //to accept json request

app.get('/', (req, res) => {
  res.send('This is a search engine');
});

app.get('/search', (req, res) => {
  console.log(req.query);
  if (req.query.q) {
    return values;
  }
  return res.json(doc);
});

app.get('/documents/:id', (req, res) => {
  const found = doc.some((document) => document.id === parseInt(req.params.id));
  if (found) {
    res.json(doc.filter((document) => document.id === parseInt(req.params.id)));
  } else {
    res.status(404).json(`The document ${req.params.id} is not found`);
  }
});

app.post('/search', (req, res) => {
  if (req.body.fields) {
    if (req.query.q) {
      return res.send({ msg: 'This is an error message' }).status(400);
    }

    const filtered = doc.filter((item) => {
      const keyName = Object.keys(req.body.fields)[0];
      const value = Object.values(req.body.fields)[0];

      return item[keyName].includes(value);
    });
    return res.json(filtered);
  }

  return res.json(doc);
});

let values = Object.values(
  doc.filter((item) => {
    return String(item).includes('Mobile');
  })
);

console.log(values);
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
