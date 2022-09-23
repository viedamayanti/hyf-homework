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

// It does not work
app.get('/search', (req, res) => {
  console.log(req.query);
  const queryValue = req.query.q;
  if (queryValue) {
    const values = doc.filter((item) => {
      return Object.values(item)
        .map(String)
        .some((value) =>
          // @ts-ignore
          value.toLowerCase().includes(queryValue.toLowerCase())
        );
    });
    return res.json(values);
  }
  return res.json(doc);
});

app.post('/search', (req, res) => {
  console.log(req.body.fields);
  res.json(doc);
});

app.get('/documents/:id', (req, res) => {
  const filtered = doc.some(
    (document) => document.id === parseInt(req.params.id)
  );
  if (filtered) {
    res.json(doc.filter((document) => document.id === parseInt(req.params.id)));
  } else {
    res.status(404).send(`The document ${req.params.id} is not found`);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
