'use client'

import { ApolloProvider, useQuery } from '@apollo/client'
import { client } from '@/lib/apollo'
import CardList from '@/components/CardList'
import SinglePage from '@/components/SinglePage'
import Loading from '@/components/Loading'
import ErrorMessage from '@/components/ErrorMessage'
import { GET_RESUME } from '@/graphql/query/resume'

function Resume() {
  const { loading, error, data } = useQuery(GET_RESUME)

  if (loading) return <Loading />;
  if (error) return <ErrorMessage data={error.message} />;

  return (
    <SinglePage title="Full Resume">
      <CardList data={data?.experiences} />
    </SinglePage>
  )
}

export default function Page() {
  return (
    <ApolloProvider client={client}>
      <Resume />
    </ApolloProvider>
  )
}
