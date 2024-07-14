const express = require('express');
const app = express();
const productRoutes = require('./route/productRote');
const volunteerRoutes = require('./route/voleenterRoute');
const helpRequestRoutes = require('./route/helpRequestRoute');
app.use(express.json());
app.use('/api', helpRequestRoutes);
// app.use(express.json());
app.use('/api', productRoutes);
app.use('/api', volunteerRoutes);

module.exports = app;
