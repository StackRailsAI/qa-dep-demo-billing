// QA fixture for StackRails dependency inference (Wave 2, ticket 124hhvu2ng7).
const express = require('express');
const app = express();

app.get('/invoices', (req, res) => res.json([]));

module.exports = app;
