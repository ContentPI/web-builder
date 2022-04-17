interface Error {
  error: boolean
  message: string
}

export function getGraphQlError(error: any): Error {
  return {
    error: true,
    message: error.toString().replace('Error: GraphQL error: ', '')
  }
}
