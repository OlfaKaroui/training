const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const routes = require('./src/routes/routes');
const itemRoutes = require('./src/routes/item.routes');
const config = require('./config');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.connect(config.DATABASE);

app.use('/routes', routes);
app.use('/items', itemRoutes);

app.listen(3000, () => {
  console.log('server started');
});
