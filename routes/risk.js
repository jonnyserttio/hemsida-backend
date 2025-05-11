const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Risk = require('../models/Risk');

// Lägg till risk
router.post('/add', auth, async (req, res) => {
  const { title, probability, impact } = req.body;
  const newRisk = new Risk({
    userId: req.user.id,
    title,
    probability,
    impact
  });

  await newRisk.save();
  res.json({ msg: 'Risk tillagd' });
});

// Hämta alla risker för användaren
router.get('/all', auth, async (req, res) => {
  const risks = await Risk.find({ userId: req.user.id });
  res.json(risks);
});

module.exports = router;
