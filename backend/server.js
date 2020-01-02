import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import env from 'dotenv';
import path from 'path';
import React from 'react';
import { renderToNodeStream } from 'react-dom/server';
import { ServerLocation } from '@reach/router';
import fs from 'fs';
import App from '../frontend/app';
import api from './router/api';

const app = express();

// Settings
const port = process.env.PORT || 3000;
const enviroment = process.env.NODE_ENV;
const html = fs
  .readFileSync(path.join(__dirname, './build/index.html'))
  .toString();
const parts = html.split('not rendered');

env.config();

// Middleware
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './build')));

if (enviroment === 'development') {
  app.use(morgan('dev'));
}

// Router
app.use('/api', api);
app.use((req, res) => {
  res.write(parts[0]);

  const reactMarkup = (
    <ServerLocation url={req.url}>
      <App />
    </ServerLocation>
  );

  const stream = renderToNodeStream(reactMarkup);

  stream.pipe(res, { end: false });

  stream.on('end', () => {
    res.write(parts[1]);
    res.end();
  });
});

app.listen(port, () =>
  console.log(`Port: http://localhost:${port}\nMode: ${enviroment}`)
);
