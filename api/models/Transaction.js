const mongoose = require('mongoose');
const { model, Schema } = mongoose;

// Corrected CommonJS import syntax
const Transaction = require('./Transaction');

const TransactionSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  datetime: { type: Date, required: true },
});

const TransactionModel = model('Transaction', TransactionSchema);

module.exports = TransactionModel;
