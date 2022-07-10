import { mergeResolvers } from '@graphql-tools/merge'

import user from '../../../../graphql/resolvers/user'

const resolvers = mergeResolvers([user])

export default resolvers
