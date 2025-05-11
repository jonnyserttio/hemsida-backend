const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

// ✅ Tillåt endast frontend från Vercel
const allowedOrigins = ['https://hemsida-frontend.vercel.app'];
app.use(cors({ origin: allowedOrigins, credentials: true }));

app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/compliance', require('./routes/compliance'));
app.use('/api/risk', require('./routes/risk'));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB ansluten'))
  .catch(err => console.error('DB-fel:', err));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server körs på port ${PORT}`));

