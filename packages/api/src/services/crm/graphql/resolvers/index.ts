import { mergeResolvers } from '@graphql-tools/merge'

import user from '../../../../graphql/resolvers/user'
import expense from './expense'
import freeNight from './freeNight'
import guest from './guest'
import information from './information'
import invoice from './invoice'
import invoiceElement from './invoiceElement'
import reservation from './reservation'

const resolvers = mergeResolvers([
  user,
  expense,
  freeNight,
  guest,
  information,
  invoice,
  invoiceElement,
  reservation
])

export default resolvers
