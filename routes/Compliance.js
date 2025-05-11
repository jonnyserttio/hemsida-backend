const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Compliance = require('../models/Compliance');

// POST: Spara
router.post('/save', auth, async (req, res) => {
  const { items } = req.body;
  const userId = req.user.id;

  let record = await Compliance.findOne({ userId });
  if (record) {
    record.items = items;
  } else {
    record = new Compliance({ userId, items });
  }

  await record.save();
  res.json({ msg: 'Efterlevnad sparad' });
});

// GET: Hämta
router.get('/load', auth, async (req, res) => {
  const record = await Compliance.findOne({ userId: req.user.id });
  res.json({ items: record?.items || [] });
});

module.exports = router;
