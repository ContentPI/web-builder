import { mergeTypeDefs } from '@graphql-tools/merge'

// Global Types
import Scalar from '../../../../graphql/types/Scalar'
import User from '../../../../graphql/types/User'
// Local Types
import Expense from './Expense'
import FreeNight from './FreeNight'
import Guest from './Guest'
import Information from './Information'
import Invoice from './Invoice'
import InvoiceElement from './InvoiceElement'
import Reservation from './Reservation'

export default mergeTypeDefs([
  Scalar,
  User,
  Expense,
  FreeNight,
  Guest,
  Information,
  Invoice,
  InvoiceElement,
  Reservation
])
