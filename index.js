const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8000;

const cors = require('cors');
app.use(cors());


app.use(express.json());

const dbUrl = 'mongodb+srv://lathieshmahendran24:pass1234@cluster0.dgaocnb.mongodb.net/';

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const teamRoutes = require('./routes/teamRoute');
const scoreRoutes = require('./routes/scoreRoute');

app.use('/api/teams', teamRoutes);
app.use('/api/teams', scoreRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
