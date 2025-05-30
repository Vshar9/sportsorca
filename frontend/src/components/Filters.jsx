// src/components/Filters.jsx
import { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { getTeams } from '../api/api-client'

const Filters = ({ onTeamChange, onDateFilter }) => {
  const [teams, setTeams] = useState([])
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  useEffect(() => {
    getTeams()
      .then(setTeams)
      .catch((err) => console.error('Error fetching teams:', err))
  }, [])

  const applyDateFilter = () => {
    if (startDate && endDate) {
      onDateFilter(
        startDate.toISOString().split('T')[0],
        endDate.toISOString().split('T')[0]
      )
    } else {
      alert('Please select both start and end dates')
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-4 mb-6">
      <select
        onChange={(e) => onTeamChange(e.target.value)}
        className="px-4 py-2 border rounded-md text-sm"
        defaultValue=""
      >
        <option value="">All Teams</option>
        {teams.map((team) => (
          <option key={team.id} value={team.id}>
            {team.name}
          </option>
        ))}
      </select>

      <div className="flex items-center gap-2 text-sm">
        <span>From:</span>
        <DatePicker
          selected={startDate}
          onChange={setStartDate}
          className="border rounded-md px-2 py-1 text-sm"
          dateFormat="yyyy-MM-dd"
          placeholderText="Start date"
        />
      </div>

      <div className="flex items-center gap-2 text-sm">
        <span>To:</span>
        <DatePicker
          selected={endDate}
          onChange={setEndDate}
          className="border rounded-md px-2 py-1 text-sm"
          dateFormat="yyyy-MM-dd"
          placeholderText="End date"
        />
      </div>

      <button
        onClick={applyDateFilter}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm"
      >
        Apply Date Filter
      </button>
    </div>
  )
}

export default Filters
