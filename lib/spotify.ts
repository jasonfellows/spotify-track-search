const baseUrl = "https://api.spotify.com/v1/"

function getRequestInit (token: string): RequestInit {
  return {
    headers: { 
      'Authorization': `Bearer ${token}` 
    }
  }
}

export function getTrack (trackId: string, token: string) {
  const url = `${baseUrl}tracks/${trackId}`
  return fetch(url, getRequestInit(token))
}

export function searchTracks (query: string, token: string) {
  const url = `${baseUrl}search?type=track&q=${encodeURIComponent(query)}`
  return fetch(url, getRequestInit(token))
}

const Spotify = { getTrack, searchTracks }

export default Spotify
