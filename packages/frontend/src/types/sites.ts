import { ValueOf } from './utils'

export const Site = {
  CodeJobs: 'codejobs',
  SanPancho: 'san-pancho',
  BlankPage: 'blank-page'
} as const

export type Site = ValueOf<typeof Site>
