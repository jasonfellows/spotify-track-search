import React from 'react'
import { Form, Input } from 'antd'

const FormItem = Form.Item
const { Search } = Input

type Props = {
  onSearch?: (value: string, event?: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLInputElement>) => void,
  loading: boolean
}

export function SearchForm ({ onSearch, loading }: Props) {
  return (
    <Form layout='vertical'>
      <FormItem label='Search for a song'>
        <Search
          loading={loading}
          onSearch={onSearch}
          placeholder='e.g. Robert Henke Studies for Thunder'
        />
      </FormItem>
    </Form>
  )
}

export default SearchForm
