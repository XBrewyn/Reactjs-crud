const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const env = require('dotenv');
const path = require('path');

const app = express();

// Settings
const port = process.env.PORT || 3000;
const enviroment = process.env.NODE_ENV;

env.config();

// Middleware
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './build/')));

if (enviroment === 'development') {
  app.use(morgan('dev'));
}

// Router
app.use('/api', require('./router/api'));

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/build/index.html'))
);

app.listen(port, () =>
  console.log(`Port: http://localhost:${port}\nMode: ${enviroment}`)
);
