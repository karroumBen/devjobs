const mongoose = require('mongoose');

const jobPostSchema = new mongoose.Schema({
  employer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  postedDate: { type: Date, default: Date.now },
  jobType: { type: String, enum: ['Full time', 'Part time', 'Contract'], required: true },
  distance: { type: String, enum: ['On site', 'Remote', 'Hybrid'], required: true },
});

const JobPost = mongoose.model('JobPost', jobPostSchema);

module.exports = JobPost;
