if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express')
const db = require('./db');
const app = express()
const port = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/health', (_req, res) => {
  res.sendStatus(200);
});

db.connectToDB();

const startServer = () => {
  app.listen(port, '0.0.0.0', () => console.log(`running: http://localhost:${port}`))
}

module.exports = { app, startServer };