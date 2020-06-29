import { Form, Input } from 'antd'

const FormItem = Form.Item
const { Search } = Input

export function SearchForm () {
  return (
    <Form layout='vertical'>
      <FormItem label='Search for a song'>
        <Search placeholder='e.g. Robert Henke Studies for Thunder' />
      </FormItem>
    </Form>
  )
}

export default SearchForm
