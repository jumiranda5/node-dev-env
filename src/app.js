import express from 'express';
import chalk from 'chalk';
const debug = require('debug')('app:');
import morgan from 'morgan';
import config from './config';

// Instantiate the app
const app = express();

app.use(morgan('dev'));

// include routes
const routes = require('./routes');
app.use('/', routes);

// Invoke the app's '.listen()'
const port = config.PORT;
app.listen(port, (err) => {
  if (err) {
    debug(err);
  } else {
    debug(`Server is listening on port ${chalk.green(port)}`);
  }
});
