import mongoose from "mongoose";
const { Schema } = mongoose;

const jobPostingSchema = new Schema({
  position: String,
  shortDescription: String,
  longDescription: String,
  createdAt: { type: Date, default: Date.now },
  payRange: String,
  postedBy: String,
  // part time, full, hibred, remote
  positionType: { type: String, default: 'full-time'},
});

const JobPosting = mongoose.model('jobPosting', jobPostingSchema);

export default JobPosting;