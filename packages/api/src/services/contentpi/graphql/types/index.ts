import { mergeTypeDefs } from '@graphql-tools/merge'

// Global Types
import Scalar from '../../../../graphql/types/Scalar'
import User from '../../../../graphql/types/User'
// Local Types
import App from './App'
import Declaration from './Declaration'
import Enumeration from './Enumeration'
import Field from './Field'
import I18n from './I18n'
import Model from './Model'
import Value from './Value'

export default mergeTypeDefs([
  Scalar,
  User,
  App,
  Declaration,
  Enumeration,
  Field,
  I18n,
  Model,
  Value
])
