const mongoose = require('mongoose');

const jobPostSchema = new mongoose.Schema({
  employer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  postedDate: { type: Date, default: Date.now },
});

const JobPost = mongoose.model('JobPost', jobPostSchema);

module.exports = JobPost;
