import React, { useState, ChangeEvent, MouseEvent, KeyboardEvent } from 'react'
import { GetStaticProps } from 'next'
import { Alert, Row, Col } from 'antd'
import { SingleColumnLayout } from '../layouts'
import { SearchForm, SearchResults } from '../components'
import { searchTracks } from '../lib/spotify'

type Props = {
  token: string
}

export default function Home ({ token }: Props) {
  const [error, setError] = useState<string | undefined>()
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<SpotifyApi.TrackSearchResponse | undefined>()

  const handleSearch = (value: string, event?: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLElement> | KeyboardEvent<HTMLInputElement>) => {
    if (event) event.preventDefault()
    setError(undefined)
    setLoading(true)

    searchTracks(value, token)
      .then(response => {
        if (!response.ok) throw Error(response.status.toString())
        return response.json()
      }).then(body => {
        setLoading(false)
        setResults(body)
      }).catch(error => {
        console.log(error)
        setLoading(false)
        setResults(undefined)
        setError(`Error fetching from Spotify API: ${error.message}`)
      })
  }

  return (
    <SingleColumnLayout>
      <Row justify='center'>
        <Col span='14'>
          <SearchForm className='my-5' loading={loading} onSearch={handleSearch} />
        </Col>
      </Row>
      <Row justify='center'>
        <Col span='20'>
          {!loading && error && <Alert type='error' message={error} />}
          {!loading && <SearchResults loading={loading} results={results} />}
        </Col>
      </Row>
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
