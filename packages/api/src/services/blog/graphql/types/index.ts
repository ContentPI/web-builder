import { mergeTypeDefs } from '@graphql-tools/merge'

// Global Types
import Scalar from '../../../../graphql/types/Scalar'
import User from '../../../../graphql/types/User'

export default mergeTypeDefs([Scalar, User])
