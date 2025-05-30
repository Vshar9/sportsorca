
# SportsOrca Internship Task - Match Viewer App

This is a full stack web application developed as part of the SportsOrca Internship task. It displays upcoming soccer matches using data from the [API-Football](https://www.api-football.com/) (api-sports.io) service. Users can view matches, filter by team or date, and access detailed match information.

## Features

- View upcoming soccer matches.
- Filter matches by team and date range.
- View detailed information about each match.
- Backend built with Node.js and Express.
- Frontend built with React.

## Prerequisites

- Node.js (v18 or above)
- npm
- An API key from [API-Football](https://dashboard.api-football.com/)

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Vshar9/sportsorca].git
cd sportsorca
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder with the following content:

```
API_KEY=
PORT=
```

Start the backend server:

```bash
npm run dev
```

Backend will run at: [http://localhost:5000](http://localhost:5000)

### 3. Setup Frontend

Open a new terminal window or tab, then run:

```bash
cd frontend
npm install
npm start
```

Frontend will launch at: [http://localhost:3000](http://localhost:3000)

## Backend API Endpoints

| Endpoint               | Method | Description                               |
|------------------------|--------|-------------------------------------------|
| `/api/teams`           | GET    | Get a list of teams                        |
| `/api/matches`         | GET    | Get all upcoming matches                   |
| `/api/matches/:id`     | GET    | Get detailed info for a match by ID        |
| `/api/matches/filter`  | GET    | Filter matches by team and/or date range   |
