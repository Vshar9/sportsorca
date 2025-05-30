// src/pages/Home.jsx
import { useState, useEffect } from 'react'
import Filters from '../components/Filters'
import MatchCard from '../components/MatchCard'
import {
  getUpcomingMatches,
  getMatchesByTeam,
  getMatchesByDateRange,
} from '../api/api-client'

const Home = () => {
  const [matches, setMatches] = useState([])
  const [teamId, setTeamId] = useState('')
  const [dateRange, setDateRange] = useState({ start: '', end: '' })

  // Fetch matches based on filters
  useEffect(() => {
    const fetchMatches = async () => {
      try {
        if (teamId) {
          const data = await getMatchesByTeam(teamId)
          setMatches(data)
        } else if (dateRange.start && dateRange.end) {
          const data = await getMatchesByDateRange(dateRange.start, dateRange.end)
          setMatches(data)
        } else {
          const data = await getUpcomingMatches()
          setMatches(data)
        }
      } catch (err) {
        console.error('Failed to fetch matches:', err)
      }
    }

    fetchMatches()
  }, [teamId, dateRange])

  const handleTeamChange = (id) => {
    setTeamId(id)
    // Reset date range when team filter changes
    setDateRange({ start: '', end: '' })
  }

  const handleDateFilter = (start, end) => {
    setDateRange({ start, end })
    // Reset team when date filter changes
    setTeamId('')
  }

  return (
    <div className="container mx-auto p-4">
      <Filters onTeamChange={handleTeamChange} onDateFilter={handleDateFilter} />

      {matches.length === 0 && <p>No matches found.</p>}

      <div className="grid gap-4">
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  )
}

export default Home
