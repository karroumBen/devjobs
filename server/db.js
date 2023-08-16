const mongoose = require('mongoose');

const connectToDB = () => {
  mongoose.connect(process.env.DATABASE_URL, {}).then(
    () => {
      console.log('connected to mongoose');
    },
    err => { console.log(err); }
  );
};

module.exports = { connectToDB };