const JobPost = require('./Model');

const JobPostController = {
  getAllJobPosts: async (req, res) => {
    try {
      const jobPosts = await JobPost.find({});
      res.status(200).json(jobPosts);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching job posts.' });
    }
  },

  createJobPost: async (req, res) => {
    try {
      const newJobPost = await JobPost.create(req.body);
      res.status(201).json(newJobPost);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating the job post.' });
    }
  },

  getJobPost: async (req, res) => {
    try {
      const jobId = req.params.job_id;
      const jobPost = await JobPost.findById(jobId);
      if (jobPost) {
        res.status(200).json(jobPost);
      } else {
        res.status(404).json({ error: 'Job post not found.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching the job post.' });
    }
  },
};

module.exports = JobPostController;
