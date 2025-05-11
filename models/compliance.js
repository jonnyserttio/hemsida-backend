const mongoose = require('mongoose');

const ComplianceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [String]
});

module.exports = mongoose.model('Compliance', ComplianceSchema);
