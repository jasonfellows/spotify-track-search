import React from 'react'

type Props = {
  alt?: string,
  className?: string,
  src: string
}

const style = {
  height: '100%',
  marginRight: '2vw'
}

export function SearchResultCover ({ alt, className, src }: Props) {
  return (
    <img alt={alt} className={className} src={src} style={style} />
  )
}

export default SearchResultCover
