import React, { CSSProperties } from 'react'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { Alert, Row, Col } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { SingleColumnLayout } from '../../layouts'
import { getTrack } from '../../lib/spotify'
import { TrackDetail } from '../../components'

type Props = {
  error?: string,
  track?: SpotifyApi.TrackObjectFull
}

const linkStyle: CSSProperties = {
  color: 'inherit',
  fontSize: '1.4rem',
  textDecoration: 'none'
}

export default function TrackDetailPage ({ error, track }: Props) {
  return (
    <SingleColumnLayout>
      <Row className='my-5' justify='start'>
        <Col span='20'>
          <Link href='/'>
            <a href='/' style={linkStyle}>
              <ArrowLeftOutlined className='mr-2' />
              <span>back</span>
            </a>
          </Link>
        </Col>
      </Row>
      {track && (
        <Row>
          <Col span='20'>
            <TrackDetail track={track} />
          </Col>
        </Row>
      )}
      {error && <Alert message={error} type='error' />}
    </SingleColumnLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const id = context.params && context.params.id || ''
    const response = await getTrack(id, process.env.SPOTIFY_ACCESS_TOKEN)
    const body = await response.json()

    if (!response.ok) {
      return {
        props: {
          error: `Error: ${body.error.message}`
        }
      }
    }

    return {
      props: { 
        track: body 
      }
    }
  } catch (error) {
    console.log(error)

    return {
      props: {
        error: `Error: ${error.message}`
      }
    }
  }
}
