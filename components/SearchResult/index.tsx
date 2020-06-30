import React, { CSSProperties } from 'react'
import Link from 'next/link'
import { List } from 'antd'
import SearchResultCover from './SearchResultCover'
import SearchResultTitle from './SearchResultTitle'

type Props = {
  track: SpotifyApi.SingleTrackResponse
}

const listItemStyle = {
  backgroundColor: 'white',
  border: '1px solid #ddd',
  height: '16vw',
  maxHeight: '10rem',
  padding: '0'
}

const anchorStyle: CSSProperties = {
  alignItems: 'center',
  display: 'flex',
  color: 'inherit',
  height: '100%',
  justifyContent: 'left',
  textDecoration: 'none',
  width: '100%'
}

export function SearchResult ({ track }: Props) {
  const link = `/track/${track.id}`

  return (
    <List.Item className='mb-4' style={listItemStyle}>
      <Link href={link}>
        <a href={link} style={anchorStyle}>
          <SearchResultCover alt={track.name} src={track.album.images[1].url} />
          <SearchResultTitle artists={track.artists} name={track.name} />
        </a>
      </Link>
    </List.Item>
  )
}

export default SearchResult
