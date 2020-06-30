import React, { ReactNode } from 'react'
import { Layout } from 'antd'

const { Content } = Layout

type Props = {
  children?: ReactNode
}

const layoutStyle = {
  backgroundColor: 'var(--backgroundColor)',
  margin: '0 auto',
  maxWidth: '60rem'
}

export function SingleColumnLayout ({ children }: Props) {
  return (
    <Layout style={layoutStyle}>
      <Content>
        {children}
      </Content>
    </Layout>
  )
}

export default SingleColumnLayout
