import React from 'react'
import { List } from 'antd'
import SearchResultAvatar from './SearchResultAvatar'
import SearchResultTitle from './SearchResultTitle'

type Props = {
  track: SpotifyApi.SingleTrackResponse
}

export function SearchResult ({ track }: Props) {
  return (
    <List.Item>
      <List.Item.Meta
        avatar={<SearchResultAvatar src={track.album.images[1].url} />}
        title={<SearchResultTitle artists={track.artists} name={track.name} />}
      />
    </List.Item>
  )
}

export default SearchResult
