import React from 'react'
import { Form, Input } from 'antd'

const FormItem = Form.Item
const { Search } = Input

type Props = {
  loading: boolean,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  onSearch?: (value: string, event?: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLInputElement>) => void,
  query: string | undefined
}

export function SearchForm ({ loading, onSearch, onChange, query }: Props) {
  return (
    <Form layout='vertical'>
      <FormItem label='Search for a song'>
        <Search
          loading={loading}
          onChange={onChange}
          onSearch={onSearch}
          placeholder='e.g. Robert Henke Studies for Thunder'
          value={query}
        />
      </FormItem>
    </Form>
  )
}

export default SearchForm
