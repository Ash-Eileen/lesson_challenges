const express = require('express');
const router = express.Router();
const { getComments } = require('../controllers/comments_controller')

// Get comments
router.get('/', getComments);

// Get specific comments
router.get('/:id', (req, res) => {
  console.log(`You're at the comments id page`)
  res.send(`Here you can look for comments based on ${req.params.id}`)
});

module.exports = router;