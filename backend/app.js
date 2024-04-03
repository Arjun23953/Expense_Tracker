const express = require('express');
const body_parser = require('body-parser');
const transactionRoute = require('./routes/transactions');
const authRoute = require('./routes/auth');
const errorHandler = require('./utils/errorHandler');

const app = express();
app.use(body_parser.json());

app.use('/api/transactions', transactionRoute);
app.use('/api/auth', authRoute);

app.use(errorHandler);

module.exports = app;