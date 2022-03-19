import { IPalette } from '../theme/palette'
import { ITypography } from './typography'

export interface Theme {
  palette: IPalette
  typography?: ITypography
}
