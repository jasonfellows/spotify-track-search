import React, { CSSProperties } from 'react'
import { Form, Input } from 'antd'

const FormItem = Form.Item
const { Search } = Input

type Props = {
  className: string,
  loading: boolean,
  onSearch?: (value: string, event?: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLInputElement>) => void,
}

const titleStyle: CSSProperties = {
  fontSize: '1.5rem',
  textAlign: "center"
}

export function SearchForm ({ className, loading, onSearch }: Props) {
  return (
    <Form className={className} layout='vertical' size='large'>
      <h4 className='mb-4' style={titleStyle}>Search for a song</h4>
      <FormItem>
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
