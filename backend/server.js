const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const insertSampleData = require('./insertSampleData');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());
dotenv.config();
const port = process.env.PORT || 5000;
const dbUri = process.env.MONGODB_URI;

// mongoose.connect(dbUri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('MongoDB connected successfully');
//   insertSampleData(); // Insert sample data when database is connected
// });

mongoose.set('strictQuery', false);
mongoose.connect(dbUri, () => {
  console.log('Connected to database successfully');
});

// Define routes here
app.use(express.json());
app.use('/users', userRoutes);
// insertSampleData();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
