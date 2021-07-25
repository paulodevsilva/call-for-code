require('dotenv').config();
require('express-async-errors');

const express = require('express');

const routes = require('./routes');

require('./database')

const app = express();
 
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use('/api', routes)


app.use((err, req, res, next)=> {
  if (err instanceof Error) {
    return res.status(400).json({ error: err.message})
  }
  return res.status(500).json({ status: 'error', message: 'Internal Server Error'});
});


module.exports = app;