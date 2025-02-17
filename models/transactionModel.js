const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    bankName: { type: String, required: true },
    transactionType: { type: String, enum: ['Credited', 'Debited'], required: true },
    amount: { type: Number, required: true },
    screenshot: { type: String }, 
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Transaction', transactionSchema);