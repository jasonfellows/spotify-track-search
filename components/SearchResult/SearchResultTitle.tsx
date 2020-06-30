import React from 'react'

type Props = {
  artists: Array<SpotifyApi.ArtistObjectSimplified>,
  name: string
}

export function SearchResultTitle ({ artists, name }: Props) {
  return (
    <>
      {`${artists.map((artist: SpotifyApi.ArtistObjectSimplified) => artist.name).join(', ')} - ${name}`}
    </>
  )
}

export default SearchResultTitle


