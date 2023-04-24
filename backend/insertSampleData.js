const mongoose = require('mongoose');
const data = require('./sample_data.json');
const User = require('./models/user');

const dotenv = require('dotenv');
module.exports = async function insertSampleData() {
  console.log('inside');
  mongoose.set('strictQuery', false);
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  db.on('error', (error) => {
    console.error(error);
  });
  db.once('open', async () => {
    console.log('ho');
    console.log('Connected to database');
    let count = 0;
    try {
      console.log('deleting strated');
      // await User.deleteMany(); // delete all existing documents in the User collection
      console.log('deleting ended');
      for (const user of data) {
        await User.create(user);

        console.log(`data ${count++} is inserted`);
      }
      console.log(`Data loaded successfully`);
    } catch (error) {
      console.error(error);
    }

    db.close();
  });
};
