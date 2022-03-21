import React, { ChangeEvent, FC } from 'react'

import { Input, Label, RoundSpan, SquareSpan, Switcher, Text } from './Switcher.styled'

interface IProps {
  label?: string
  checked?: boolean
  type?: string
  readOnly?: boolean
  onChange?(e: ChangeEvent<HTMLInputElement>): void
}

const SwitcherComponent: FC<IProps> = ({
  label = '',
  type,
  readOnly,
  onChange,
  checked = false
}) => (
  <Switcher data-component="Switcher">
    <Label>
      <Input type="checkbox" onChange={onChange} checked={checked} readOnly={readOnly} />
      {type === 'round' ? <RoundSpan className="slider" /> : <SquareSpan className="slider" />}
    </Label>
    &nbsp;
    <Text>{label}</Text>
  </Switcher>
)

export default SwitcherComponent
