const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const startServer = () => {
  app.listen(port, () => console.log(`running: http://localhost:${port}`))
}

module.exports = { app, startServer };