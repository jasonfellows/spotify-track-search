import React from 'react'

type Props = {
  loading: boolean,
  query: string | undefined,
  results: Array<object>
}

export function SearchResults ({ loading, query, results }: Props) {
  if (loading) return <span>loading</span>
  if (query && results.length == 0) return <span>no results</span>

  return (
    <div>
      {results.length > 0 && results.map(result => <div>{JSON.stringify(result)}</div>)}
    </div>
  )
}

export default SearchResults
