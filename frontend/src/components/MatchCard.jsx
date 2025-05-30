// src/components/MatchCard.jsx
import { useState } from 'react'

const MatchCard = ({ match }) => {
  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => setExpanded((prev) => !prev)

  // Format date/time nicely
  const matchDate = new Date(match.date) // assuming `match.date` is ISO string
  const formattedDate = matchDate.toLocaleString(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  })

  return (
    <div
      className={`border rounded-md p-4 shadow-md transition-all duration-300 ${
        expanded ? 'bg-blue-50' : 'bg-white'
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold">
          {match.team1.name} vs {match.team2.name}
        </div>
        <button
          onClick={toggleExpanded}
          className="text-blue-600 hover:text-blue-800 focus:outline-none"
        >
          {expanded ? 'Collapse ▲' : 'Expand ▼'}
        </button>
      </div>

      <div className="text-sm text-gray-600 mt-1">{formattedDate}</div>

      {expanded && (
        <div className="mt-4 text-gray-700 space-y-2">
          {/* You can add more detailed match info here, e.g.: */}
          <p><strong>Venue:</strong> {match.venue || 'TBD'}</p>
          <p><strong>Status:</strong> {match.status || 'Scheduled'}</p>
          <p><strong>League:</strong> {match.league?.name || 'N/A'}</p>
          {/* Add anything else you want from the match object */}
        </div>
      )}
    </div>
  )
}

export default MatchCard
