<<<<<<< HEAD
const transactionRepository = require('../repositories/transactionRepository');

class TransactionService {
    async createTransaction(data) {
        return await transactionRepository.createTransaction(data);
    }

    async getAllTransactions() {
        return await transactionRepository.getAllTransactions();
    }

    async getTransactionById(id) {
        return await transactionRepository.getTransactionById(id);
    }

    async updateTransaction(id, data) {
        return await transactionRepository.updateTransaction(id, data);
    }

    async deleteTransaction(id) {
        return await transactionRepository.deleteTransaction(id);
    }
}

module.exports = new TransactionService();
=======
const transactionRepository = require('../repositories/transactionRepository');

class TransactionService {
    async createTransaction(data) {
        return await transactionRepository.createTransaction(data);
    }

    async getAllTransactions() {
        return await transactionRepository.getAllTransactions();
    }

    async getTransactionById(id) {
        return await transactionRepository.getTransactionById(id);
    }

    async updateTransaction(id, data) {
        return await transactionRepository.updateTransaction(id, data);
    }

    async deleteTransaction(id) {
        return await transactionRepository.deleteTransaction(id);
    }
}

module.exports = new TransactionService();
>>>>>>> 6ed50995adf726b3e3cbc6b9367ce53028c4dee4
