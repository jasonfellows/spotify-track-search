import React, { CSSProperties } from 'react'

type Props = {
  artists: Array<SpotifyApi.ArtistObjectSimplified>,
  name: string
}

const style: CSSProperties = {
  fontSize: '1.4rem',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  width: '70%',
}

export function SearchResultTitle ({ artists, name }: Props) {
  return (
    <div style={style}>
      {`${artists.map((artist: SpotifyApi.ArtistObjectSimplified) => artist.name).join(', ')} - ${name}`}
    </div>
  )
}

export default SearchResultTitle


