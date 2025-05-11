const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB ansluten'))
  .catch(err => console.error('DB-fel:', err));

app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server körs på port ${PORT}`));
app.use('/api/compliance', require('./routes/compliance'));
app.use('/api/risk', require('./routes/risk'));
