const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
require('dotenv').config({path:'../client/.env'})


// console.log("TEST");
// console.log(require("dotenv").config({path:'../client/.env'}))

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
