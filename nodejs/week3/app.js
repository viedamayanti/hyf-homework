// @ts-ignore
const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST || '0.0.0.0',
    port: process.env.DB_PORT || 33060,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'pass',
    database: process.env.DB_NAME || 'hyf_node_week3_warmup',
    multipleStatements: true,
  },
});

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const apiRouter = express.Router();
app.use('/api', apiRouter);

const contactsAPIRouter = express.Router();
apiRouter.use('/contacts', contactsAPIRouter);

contactsAPIRouter.get('/', async (req, res) => {
  let query = knex.select('*').from('contacts');

  //The original version
  /* if ('sort' in req.query) {
    // @ts-ignore
    const orderBy = req.query.sort.toString();
    if (orderBy.length > 0) {
      query = query.orderByRaw(orderBy);
    }
  }*/
  //The fix version

  if ('sort' in req.query) {
    // @ts-ignore
    const sorting = req.query.sort.toString().split(' ');
    if (sorting.length > 0) {
      query = query.orderBy(sorting[0]);
    }
  }
  console.log('SQL', query.toSQL().sql);

  try {
    const data = await query;
    res.json({ data });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
