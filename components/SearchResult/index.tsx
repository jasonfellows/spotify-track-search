import React from 'react'
import { List } from 'antd'
import SearchResultCover from './SearchResultCover'
import SearchResultTitle from './SearchResultTitle'

type Props = {
  track: SpotifyApi.SingleTrackResponse
}

const style = {
  backgroundColor: 'white',
  border: '1px solid #ddd',
  height: '16vw',
  maxHeight: '10rem',
  justifyContent: 'left',
  padding: '0'
}

export function SearchResult ({ track }: Props) {
  return (
    <List.Item className='mb-4' style={style}>
      <SearchResultCover alt={track.name} src={track.album.images[1].url} />
      <SearchResultTitle artists={track.artists} name={track.name} />
    </List.Item>
  )
}

export default SearchResult
