const { app, startServer } = require('./server.js');
const userRouter = require('./features/user/router.js');
const jobPostRouter = require('./features/jobPosting/router.js');
const jobApplicationRouter = require('./features/jobApplication/router.js');
const cors = require('cors');

app.use(cors());

const allowlist = ['http://localhost:3001']
const corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } 
  } else {
    corsOptions = { origin: false }
  }
  callback(null, corsOptions)
}

app.use('/api/users', cors(corsOptionsDelegate), userRouter);
app.use('/api/jobposts', cors(corsOptionsDelegate), jobPostRouter);
app.use('/api/job_applications', cors(corsOptionsDelegate), jobApplicationRouter);

startServer();