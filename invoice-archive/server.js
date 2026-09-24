// QA fixture for StackRails route matching (ticket 124hhvu2ngk): a second service that also
// serves POST /refunds, so shop's call to /refunds matches two components' routes.
const express = require('express');
const app = express();

app.post('/refunds', (req, res) => res.status(202).json({ archived: true }));

module.exports = app;
