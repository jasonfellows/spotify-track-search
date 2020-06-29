import React, { ReactNode } from 'react'
import { Layout } from 'antd'

const { Content } = Layout

type Props = {
  children?: ReactNode
}

export function SingleColumnLayout ({ children }: Props) {
  return (
    <Layout>
      <Content>
        {children}
      </Content>
    </Layout>
  )
}

export default SingleColumnLayout
