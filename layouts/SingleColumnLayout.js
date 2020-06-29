import { Layout } from 'antd'

const { Content } = Layout

export function SingleColumnLayout ({ children }) {
  return (
    <Layout>
      <Content>
        {children}
      </Content>
    </Layout>
  )
}

export default SingleColumnLayout
