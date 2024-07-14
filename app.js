const express = require('express');
const app = express();
const volunteerRoutes = require('./route/voleenterRoute');
const helpRequestRoutes = require('./route/helpRequestRoute');
app.use(express.json());

app.use('/api', helpRequestRoutes);
app.use('/api', volunteerRoutes);

module.exports = app;
