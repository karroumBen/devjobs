import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  createdAt: { type: Date, default: Date.now },
  avatar: String,
})

const User = mongoose.model('user', userSchema);
export default User;