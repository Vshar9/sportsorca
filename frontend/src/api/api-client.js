const API_BASE_URL = '/api'  // Proxy assumed in vite.config.js for dev

async function fetchJSON(url) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`API error: ${res.status} ${res.statusText}`)
  return res.json()
}

export async function getTeams() {
  return fetchJSON(`${API_BASE_URL}/teams`)
}

export async function getUpcomingMatches() {
  return fetchJSON(`${API_BASE_URL}/matches/upcoming`)
}

export async function getMatchesByTeam(teamId) {
  return fetchJSON(`${API_BASE_URL}/matches?teamId=${teamId}`)
}

export async function getMatchesByDateRange(startDate, endDate) {
  return fetchJSON(`${API_BASE_URL}/matches?startDate=${startDate}&endDate=${endDate}`)
}

export async function getMatchDetails(matchId) {
  return fetchJSON(`${API_BASE_URL}/matches/${matchId}`)
}