'use client'

import { ApolloProvider, useQuery } from '@apollo/client'
import { client } from '@/lib/apollo'
import CardList from '@/components/CardList'
import SinglePage from '@/components/SinglePage'
import Loading from '@/components/Loading'
import ErrorMessage from '@/components/ErrorMessage'
import { GET_ARCHIVE } from '@/graphql/query/archive'

function Archive() {
  const { loading, error, data } = useQuery(GET_ARCHIVE)

  if (loading) return <Loading />;
  if (error) return <ErrorMessage data={error.message} />;

  return (
    <SinglePage title="All Projects">
      <CardList data={data?.projects} />
    </SinglePage>
  )
}

export default function Page() {
  return (
    <ApolloProvider client={client}>
      <Archive />
    </ApolloProvider>
  )
}
