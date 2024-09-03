// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

// Set up body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up comments array
let comments = [];

// Read comments from file
fs.readFile('comments.json', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    comments = JSON.parse(data);
  }
});

// GET /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
  const comment = {
    id: comments.length + 1,