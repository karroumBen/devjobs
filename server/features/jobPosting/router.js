const express = require('express');
const JobPostController = require('./controller');

const router = express.Router();

// Get all job posts
router.get('/', JobPostController.getAllJobPosts);

// Create a new job post
router.post('/', JobPostController.createJobPost);

// Get job post by ID
router.get('/:job_id', JobPostController.getJobPost);
router.delete('/:job_id', JobPostController.deleteJobPost);

module.exports = router;
