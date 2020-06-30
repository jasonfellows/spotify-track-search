import React from 'react'
import { List } from 'antd'
import SearchResult from './SearchResult'

type Props = {
  loading: boolean,
  results: SpotifyApi.TrackSearchResponse | undefined
}

export function SearchResults ({ loading, results }: Props) {
  if (loading) return <span>loading</span>
  if (!results) return null
  if (results.tracks.total == 0) return <span>no results</span>

  return (
    <List
      itemLayout="horizontal"
      dataSource={results.tracks.items}
      renderItem={(item: SpotifyApi.SingleTrackResponse) => <SearchResult track={item} />}
    />
  )
}

export default SearchResults
