import { mergeResolvers } from '@graphql-tools/merge'

import role from './role'
import user from './user'

const resolvers = mergeResolvers([role, user])

export default resolvers
