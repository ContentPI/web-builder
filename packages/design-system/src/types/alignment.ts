import { ValueOf } from '@web-builder/utils'

export const Alignment = {
  left: 'left',
  center: 'center',
  right: 'right'
} as const

export type Alignment = ValueOf<typeof Alignment>
