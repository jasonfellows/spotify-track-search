import React from 'react'
import { Alert, List } from 'antd'
import SearchResult from './SearchResult'

type Props = {
  loading: boolean,
  results: SpotifyApi.TrackSearchResponse | undefined
}

export function SearchResults ({ loading, results }: Props) {
  if (!results) return null
  if (results.tracks.total == 0) return <Alert type='info' message='No results' />

  return (
    <List
      itemLayout="horizontal"
      dataSource={results.tracks.items}
      renderItem={(item: SpotifyApi.SingleTrackResponse) => <SearchResult track={item} />}
    />
  )
}

export default SearchResults
