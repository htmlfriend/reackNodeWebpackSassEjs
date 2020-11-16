import config, { nodeEnv } from './config.js';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import express from 'express';
const server = express();
import apiRouter from './api/index.js';

server.use(
  sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public'),
  })
);
server.set('view engine', 'ejs');
server.get('/', (req, res) => {
  res.render('pages/index', {
    content: 'helllo sfsldjslkjdflsjdflj',
  });
});

server.use('/api', apiRouter);
server.use(express.static('public'));
server.listen(config.port, () => {
  console.log('Express listening on port', config.port);
});
