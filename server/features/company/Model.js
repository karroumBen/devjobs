import mongoose from 'mongoose';
const { Schema } = mongoose;

const companySchema = new Schema({
  name: String,
  logo: String,
  createdAt: { type: Date, default: Date.now },
  location: String,
  webpage: String,
})

const Company = mongoose.model('company', companySchema);
export default Company;