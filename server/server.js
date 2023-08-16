if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express')
const path = require('path')
const db = require('./db');
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

db.connectToDB();

const startServer = () => {
  app.listen(port, () => console.log(`running: http://localhost:${port}`))
}

module.exports = { app, startServer };