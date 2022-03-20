import { ValueOf } from './utils'

export const Site = {
  Blog: 'blog',
  SanPancho: 'san-pancho'
} as const

export type Site = ValueOf<typeof Site>
