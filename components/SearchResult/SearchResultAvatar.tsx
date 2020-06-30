import React from 'react'
import { Avatar } from 'antd'

type Props = {
  src: string
}

export function SearchResultAvatar ({ src }: Props) {
  return (
    <Avatar shape='square' src={src} />
  )
}

export default SearchResultAvatar


