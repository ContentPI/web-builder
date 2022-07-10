import { mergeResolvers } from '@graphql-tools/merge'

import user from '../../../../graphql/resolvers/user'
import app from './app'
import declaration from './declaration'
import enumeration from './enumeration'
import field from './field'
import i18n from './i18n'
import model from './model'
import value from './value'

const resolvers = mergeResolvers([user, app, declaration, enumeration, field, i18n, model, value])

export default resolvers
