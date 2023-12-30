const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// POST endpoint to get the sum of two numbers
app.post('/add', (req, res) => {
  const { num1, num2 } = req.body;
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ status: 'error', message: 'Invalid data types' });
  }

  const result = num1 + num2;
  if (result > 1000000) {
    return res.status(400).json({ status: 'error', message: 'Overflow' });
  } else if (result < -1000000) {
    return res.status(400).json({ status: 'error', message: 'Underflow' });
  }

  res.json({ result });
});

// POST endpoint to get the difference of two numbers
app.post('/subtract', (req, res) => {
  const { num1, num2 } = req.body;
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ status: 'error', message: 'Invalid data types' });
  }

  const result = num1 - num2;
  if (result > 1000000) {
    return res.status(400).json({ status: 'error', message: 'Overflow' });
  } else if (result < -1000000) {
    return res.status(400).json({ status: 'error', message: 'Underflow' });
  }

  res.json({ result });
});

// POST endpoint to get the multiplication of two numbers
app.post('/multiply', (req, res) => {
  const { num1, num2 } = req.body;
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ status: 'error', message: 'Invalid data types' });
  }

  const result = num1 * num2;
  if (result > 1000000) {
    return res.status(400).json({ status: 'error', message: 'Overflow' });
  } else if (result < -1000000) {
    return res.status(400).json({ status: 'error', message: 'Underflow' });
  }

  res.json({ result });
});

// POST endpoint to check if num2 is 0 and perform division
app.post('/divide', (req, res) => {
  const { num1, num2 } = req.body;
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ status: 'error', message: 'Invalid data types' });
  }

  if (num2 === 0) {
    return res.status(400).json({ status: 'error', message: 'Cannot divide by zero' });
  }

  const result = num1 / num2;
  if (result > 1000000) {
    return res.status(400).json({ status: 'error', message: 'Overflow' });
  } else if (result < -1000000) {
    return res.status(400).json({ status: 'error', message: 'Underflow' });
  }

  res.json({ result });
});

const server = app.listen(4000, () => {
  console.log(`Server running on port 4000`);
});

module.exports = app;
