const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./src/routes/routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/routes', routes);

app.listen(3000, () => {
  console.log('server started');
});
