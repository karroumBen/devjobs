const mongoose = require('mongoose');

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const connectToDB = async () => {
  const url = process.env.DATABASE_URL;
  const maxAttempts = 10;

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      await mongoose.connect(url);
      console.log('connected to mongoose');
      return;
    } catch (err) {
      console.log(`mongoose connect attempt ${attempt} failed: ${err.message}`);
      if (attempt === maxAttempts) {
        throw err;
      }
      await wait(2000 * attempt);
    }
  }
};

module.exports = { connectToDB };