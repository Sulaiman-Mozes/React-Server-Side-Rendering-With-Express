import express from 'express';
import config from './config';
import serverRender from './renderers/server';
import { data } from './testData.json';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  const intialContent = await serverRender();
  res.render('index', { ...intialContent });
});

app.get('/data', (req, res) => res.status(200).json(data));

app.listen(config.PORT, () => {
  console.log(`Running on port ${config.PORT}`);
});
