const { app, startServer } = require('./server.js');

app.get('/', (req, res) => {
  res.render('index');
})

startServer();