const JobPost = require('./Model');
const User = require('../user/Model.js');

const JobPostController = {
  getAllJobPosts: async (req, res) => {
    try {
      const { userId, paramSet = {} } = req.query;
      let jobPosts = [];
      const query = {};

      if (paramSet.location) {
        query.$or = query.$or || [];
        query.$or.push({ location: { $regex: paramSet.location, $options: 'i' }});
      }

      if (paramSet.name) {
        query.$or = query.$or || [];
        query.$or.push({ title: { $regex: paramSet.name, $options: 'i' }});
      }

      if(Object.keys(paramSet).length) {
        jobPosts =  await JobPost.find(query).populate('employer', 'username avatar');
      } else {
        if(userId) {
          jobPosts = await JobPost.find({ employer: userId }).populate('employer', 'username avatar');
        } else {
          jobPosts = await JobPost.find({}).populate('employer', 'username avatar');
        }
      }
      
      res.status(200).json(jobPosts);
    } catch (error) {
      res.status(500).json({ error });
    }
  },

  createJobPost: async (req, res) => {
    try {
      const { title, location, description, userId, jobType, distance } = req.body;
      const employer = await User.findOne({ _id: userId });
      const newJobPost = await JobPost.create({
        title,
        location,
        description,
        employer: employer,
        jobType,
        distance,
      });

      res.status(201).json({ message: 'Job post created successfully'});
    } catch (error) {
      res.status(500).json({ error });
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
  deleteJobPost: async (req, res) => {
    try {
      const jobId = req.params.job_id;
      const jobPost = await JobPost.deleteOne({ _id: jobId });

      if (jobPost) {
        res.status(200).json({ message: `Job with ${jobPost.title} was deleted`});
      } else {
        res.status(404).json({ error: 'Job post not found.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching the job post.' });
    }
  },
};

module.exports = JobPostController;
