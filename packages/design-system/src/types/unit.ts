import { ValueOf } from '@web-builder/utils'

export interface IUnit {
  unitBase: string
}

export const Units = {
  unitBase: 'unitBase'
} as const

export type Units = ValueOf<typeof Units>
