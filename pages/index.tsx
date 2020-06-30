import React, { useState, ChangeEvent, MouseEvent, KeyboardEvent } from 'react'
import { GetStaticProps } from 'next'
import { SingleColumnLayout } from '../layouts'
import { SearchForm } from '../components'
import { searchTracks } from '../lib/spotify'

type Props = {
  token: string
}

export default function Home ({ token }: Props) {
  const [error, setError] = useState<string | undefined>()
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState([])

  const handleSearch = (value: string, event?: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLElement> | KeyboardEvent<HTMLInputElement>) => {
    if (event) event.preventDefault()
    setError(undefined)
    setLoading(true)

    searchTracks(value, token)
      .then(response => {
        if (!response.ok) throw Error(response.status.toString())
        return response.json()
      }).then(body => {
        const tracks = body.tracks.items
        setLoading(false)
        setResults(tracks)
      }).catch(error => {
        console.log(error)
        setLoading(false)
        setError(`Error fetching from Spotify API: ${error.message}`)
      })
  }

  return (
    <SingleColumnLayout>
      <SearchForm loading={loading} onSearch={handleSearch} />
      {!loading && error && <div>{error}</div>}
      {!loading && results.length > 0 && <div>{JSON.stringify(results)}</div>}
    </SingleColumnLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      token: process.env.SPOTIFY_ACCESS_TOKEN
    }
  }
}
