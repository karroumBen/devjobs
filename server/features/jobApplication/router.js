const express = require('express');
const ApplicationController = require('./controller');

const router = express.Router();

// Apply for a job
router.post('/:job_id/apply', ApplicationController.applyForJob);

// Get all applications for a specific job
router.get('/:job_id/applications', ApplicationController.getAllApplicationsForJob);

// Get application by ID
router.get('/:application_id', ApplicationController.getApplication);

module.exports = router;
