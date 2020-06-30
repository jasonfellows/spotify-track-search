import React from 'react'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { Alert, Row, Col } from 'antd'
import { SingleColumnLayout } from '../../layouts'
import { getTrack } from '../../lib/spotify'

type Props = {
  error?: string,
  track?: SpotifyApi.TrackObjectFull
}

export default function TrackDetailPage ({ error, track }: Props) {
  if (error) return <Alert message={error} type='error' />

  return (
    <SingleColumnLayout>
      <Row justify='start'>
        <Link href='/'>
          <a href='/'>
            <span>back</span>
          </a>
        </Link>
      </Row>
      <Row justify='center'>
        <Col span='20'>
          {JSON.stringify(track)}
        </Col>
      </Row>
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
