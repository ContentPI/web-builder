import { ValueOf } from './utils'

export const Site = {
  CodeJobs: 'codejobs',
  SanPancho: 'san-pancho'
} as const

export type Site = ValueOf<typeof Site>
