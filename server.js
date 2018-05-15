const express = require('express'),
      config = require('config'),
      morgan = require('morgan'),
      app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(config.port, () => {
  console.log('Staring server on port', config.port);
});