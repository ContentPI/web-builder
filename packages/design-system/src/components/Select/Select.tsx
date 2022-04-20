import { cx } from '@web-builder/utils'
import React, { FC, MutableRefObject, ReactElement, useEffect, useRef, useState } from 'react'
import { CSSObject } from 'styled-components'

import { Color, Size } from '../../types'
import Icon from '../Icon'
import { BASE_CLASS_NAME, CSS } from './Select.styled'

type Option = {
  option: string
  value: any
  selected?: boolean
}

type Props = {
  children?: ReactElement
  className?: string
  color?: Color
  id?: string
  label?: string
  name?: string
  noWrapper?: boolean
  onClick(e: any): any
  options?: Option[]
  style?: any
  top?: string
  size?: Size
}

const SelectComponent: FC<Props> = ({
  className = '',
  color = Color.primary,
  label = '',
  onClick,
  options = null,
  size = Size.small,
  ...selectProps
}) => {
  const classes = [color]

  const classNames = cx.generate({
    ccn: BASE_CLASS_NAME,
    data: classes
  })

  const [open, setOpen] = useState(false)
  const [selectedOption, setValue] = useState({ option: '', value: '' })
  const node = useRef() as MutableRefObject<HTMLInputElement>

  const handleClickOutside = (e: any) => {
    if (node.current.contains(e.target)) {
      return
    }

    setOpen(false)
  }

  const handleOpenOnClick = () => setOpen(!open)

  const selectOption = (option: string, value: string) => {
    if (option) {
      setValue({
        option,
        value
      })

      onClick({ option, value })

      if (open) {
        setOpen(false)
      }
    }
  }

  if (!options) {
    return null
  }

  const renderList = () => {
    const style: CSSObject = { display: open ? 'block' : 'none' }

    if (size === Size.xSmall || size === Size.small) {
      style.maxHeight = '120px'
    }

    if (size === Size.medium) {
      style.maxHeight = '150px'
    }

    if (size === Size.large) {
      style.maxHeight = '300px'
    }

    if (size === Size.xLarge) {
      style.maxHeight = '600px'
    }

    return (
      <ul style={style}>
        {options.map(({ option, value, selected }: any) => {
          if (selected && selectedOption.value === '') {
            selectOption(option, value)
          }

          return (
            <li
              key={`option-${value}`}
              onClick={(): void => selectOption(option, value)}
              style={{
                background: `${
                  selectedOption.value === value ? `var(--palette-${color}-common-main)` : ''
                }`,
                color: `${
                  selectedOption.value === value
                    ? `var(--palette-${color}-common-contrastText)`
                    : ''
                }`
              }}
              className={className}
            >
              {option}
            </li>
          )
        })}
      </ul>
    )
  }

  useEffect(() => {
    if (open && typeof window !== 'undefined') {
      document.addEventListener('mousedown', handleClickOutside)
    } else if (typeof window !== 'undefined') {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      if (typeof window !== 'undefined') {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [open])

  return (
    <div ref={node} style={{ marginTop: '5px', marginBottom: '20px' }}>
      <CSS.Select data-component="Select" color={color} className={className} {...selectProps}>
        <>
          <a onClick={handleOpenOnClick} className={classNames} role="button" tabIndex={0}>
            <div>{selectedOption.option || label}</div>
            <div>
              &nbsp;
              <Icon type={`fas fa-caret-${!selectProps.top ? 'down' : 'up'}`} />
            </div>
          </a>
          {renderList()}
        </>
      </CSS.Select>
    </div>
  )
}

export default SelectComponent
