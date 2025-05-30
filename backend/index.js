const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const matchRoutes = require('./routes/matches');
app.use('/api/matches', matchRoutes);

const teamsRoutes = require('./routes/teams');
app.use('/api/teams', teamsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
