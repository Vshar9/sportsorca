const express = require('express');
const router = express.Router();

router.get('/upcoming', async (req, res) => {
  try {
    const data = await getUpcomingMatches();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch upcoming matches.' });
  }
});

router.get('/team/:teamId', async (req, res) => {
  try {
    const { teamId } = req.params;
    const data = await getMatchesByTeam(teamId);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch matches for the team.' });
  }
});

router.get('/date', async (req, res) => {
  try {
    const { start, end } = req.query;
    const data = await getMatchesByDateRange(start, end);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch matches for the date range.' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getMatchDetails(id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch match details.' });
  }
});

module.exports = router;
