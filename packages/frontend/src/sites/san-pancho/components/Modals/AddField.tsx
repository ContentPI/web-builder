import { Input } from '@web-builder/design-system'
import React, { FC, ReactElement } from 'react'
import NumberFormat from 'react-number-format'

type AddInputProps = {
  label: ReactElement | string
  name: string
  placeholder: string
  value: string
  onChange: any
  isNumber?: boolean
}

const AddField: FC<AddInputProps> = ({ label, name, placeholder, value, onChange, isNumber }) => (
  <div>
    <label htmlFor={name}>{label}</label>

    {!isNumber && (
      <Input name={name} placeholder={placeholder} value={value} fullWidth onChange={onChange} />
    )}
    {isNumber && (
      <div className="InputWrapper">
        <NumberFormat
          name={name}
          placeholder="$0,000"
          onChange={onChange}
          value={value}
          className="moneyInput"
          thousandSeparator
          prefix="$"
        />
      </div>
    )}
  </div>
)

export default AddField
