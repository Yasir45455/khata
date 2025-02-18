<<<<<<< HEAD
const Transaction = require('../models/transactionModel');

class TransactionRepository {
    async createTransaction(data) {
        return await Transaction.create(data);
    }

    async getAllTransactions() {
        return await Transaction.find();
    }

    async getTransactionById(id) {
        return await Transaction.findById(id);
    }

    async updateTransaction(id, data) {
        return await Transaction.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteTransaction(id) {
        return await Transaction.findByIdAndDelete(id);
    }
}

module.exports = new TransactionRepository();
=======
const Transaction = require('../models/transactionModel');

class TransactionRepository {
    async createTransaction(data) {
        return await Transaction.create(data);
    }

    async getAllTransactions() {
        return await Transaction.find();
    }

    async getTransactionById(id) {
        return await Transaction.findById(id);
    }

    async updateTransaction(id, data) {
        return await Transaction.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteTransaction(id) {
        return await Transaction.findByIdAndDelete(id);
    }
}

module.exports = new TransactionRepository();
>>>>>>> 6ed50995adf726b3e3cbc6b9367ce53028c4dee4
