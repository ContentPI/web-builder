import { DocumentNode, OperationVariables, QueryResult, useQuery } from '@apollo/client'
import React, { FC, ReactElement } from 'react'

type ApolloConnectorProps = {
  query: DocumentNode
  variables?: Record<string, any>
  onSuccess: (data: any) => ReactElement
}

const ApolloConnector: FC<ApolloConnectorProps> = ({ onSuccess, query, variables = {} }) => {
  const queryOptions: OperationVariables = {
    variables: {
      ...variables
    },
    errorPolicy: 'all'
  }

  const { data, error }: QueryResult = useQuery(query, queryOptions)

  if (error) {
    console.log({ error })
  }

  if (data) {
    return onSuccess(data)
  }

  return <div />
}

export default ApolloConnector
