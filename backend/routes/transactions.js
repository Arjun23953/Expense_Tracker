const express = require('express')
const router = express.Router()
const incomeController = require('../controllers/income');
const expenseController = require('../controllers/expense');

router.post('/add-income', incomeController.addIncome);
router.get('/get-income', incomeController.getIncomes);
router.delete('/delete-income/:id', incomeController.deleteIncome);
router.post('/add-expense', expenseController.addExpense);
router.get('/get-expenses', expenseController.getExpense)
router.delete('/delete-expense/:id', expenseController.deleteExpense)

module.exports = router;


