const express = require('express');
const path = require('path');
const compression = require('compression');

const logAppRunning = require('./logAppRunning');

const app = express();

const pathToBuild = path.join(__dirname, '../build');

const oneHourMs = 3600000;

// compress all responses
app.use(compression());

app.use(express.static(pathToBuild, { maxAge: oneHourMs }));

app.get('/*', (req, res) => {
  const pathToIndex = path.join(pathToBuild, 'index.html');

  res.set('Content-Type', 'text/html');
  res.set('Cache-Control', `public, max-age=${oneHourMs}`);

  res.sendFile(pathToIndex);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);

logAppRunning({ PORT });
