// QA fixture for StackRails dependency inference (Wave 2, tickets 124hhvu2ng7 and 124hhvu2ngk).
const express = require('express');
const app = express();

app.get('/invoices', (req, res) => res.json([]));
app.post('/refunds', (req, res) => res.status(201).json({}));

module.exports = app;
