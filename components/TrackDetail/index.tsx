import React, { CSSProperties } from 'react'
import { Row, Col } from 'antd'
import { msToTime } from '../../lib/dateTime'

type Props = {
  track: SpotifyApi.TrackObjectFull
}

const imageStyle: CSSProperties = {
  width: '100%'
}

const infoStyle: CSSProperties = {
  fontSize: '1.6rem',
}

export function TrackDetail ({ track }: Props) {
  return (
    <Row align='middle' gutter={48} justify='start'>
      <Col span='8'>
        <img alt={track.name} src={track.album.images[0].url} style={imageStyle} />
      </Col>
      <Col span='12'>
        <div style={infoStyle}>{track.name}</div>
        <div style={infoStyle}>{msToTime(track.duration_ms)}</div>
        <div style={infoStyle}>{track.artists.map((artist: SpotifyApi.ArtistObjectSimplified) => artist.name).join(', ')}</div>
      </Col>
    </Row>
  )
}

export default TrackDetail
