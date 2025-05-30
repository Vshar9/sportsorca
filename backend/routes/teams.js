
const express = require('express');
const router = express.Router();
const { getTeams } = require('../services/footballApi');

router.get('/', async (req, res) => {
  try {
    const data = await getTeams();
    res.json(data);
  } catch (error) {
    console.error('Error fetching teams:', error.message);
    res.status(500).json({ error: 'Failed to fetch teams.' });
  }
});

module.exports = router;
