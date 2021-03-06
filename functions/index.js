
const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const app =express();
app.use(cors());
app.use(express.json());
app.use('/api/categories', require('./routes/categories'));
app.use('/api/comments', require('./routes/comments'));


exports.app =functions.https.onRequest(app);

