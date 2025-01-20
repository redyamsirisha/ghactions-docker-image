const express = require('express');
const router = express.Router();

router.get('/hello', (req, res) => {
  res.send('Hello from other-files.js!');
});

router.get('/goodbye', (req, res) => {
  res.send('Goodbye from other-files.js!');
});

module.exports = router;
