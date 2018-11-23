const express = require('express');
const router = express.Router();

router.get('/movies', (req, res) => {
  res.send('We made it And it great');
});

module.exports = router;
