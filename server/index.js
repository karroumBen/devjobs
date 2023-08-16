const { app, startServer } = require('./server.js');
const userRouter = require('./features/user/router.js');
const jobPostRouter = require('./features/jobPosting/router.js');
const jobApplicationRouter = require('./features/jobApplication/router.js');

app.get('/', (req, res) => {
  console.log('got it')
  res.send('test');
})

app.use('/api/users', userRouter);
app.use('/api/jobposts', jobPostRouter);
app.use('/api/job_applications', jobApplicationRouter);

startServer();