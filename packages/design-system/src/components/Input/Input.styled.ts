// Dependencies
import styled from 'styled-components'

// Theme
import { themeCssVars, calc, mapColorStyles, Base, Gray } from '../../theme'

// Types
import { CalcType, Colors, FontSize } from '../../types'

// Base Class Name
export const BASE_CLASS_NAME = 'input'

// Color
const colorStyles = mapColorStyles(Colors, BASE_CLASS_NAME, themeCssVars, {
  borderColor: 'main',
  '&:hover': {
    borderColor: 'main',
  },
})

export const InputWrapper = styled.div({
  padding: calc(CalcType.padding, [3.25, 4]),
  margin: calc(CalcType.spacing, [2, 0]),
  marginBottom: '20px',
  background: Base.WHITE,
  border: `1px solid ${Base.WHITE}`,
  boxSizing: 'border-box',
  boxShadow: '0px 7px 64px rgba(0, 0, 0, 0.07)',
  borderRadius: calc(CalcType.spacing, 2),
  width: '250px',
  '&::placeholder': {
    color: Base.WHITE,
    opacity: 1,
  },
  '&:hover': {
    borderColor: themeCssVars.palette.primary.common.main,
  },
  [`&.${BASE_CLASS_NAME}-focus`]: {
    borderColor: themeCssVars.palette.primary.common.main,
  },
  [`&.${BASE_CLASS_NAME}-full-width`]: {
    width: '100%',
  },
  display: 'flex',
  alignItems: 'center',
  ...colorStyles,
})

export const InputBase = styled.input({
  width: '100%',
  background: Base.TRANSPARENT,
  border: 'none',
  fontSize: FontSize.regular,
  fontFamily: 'inherit',
  lineHeight: '20px',
  outline: 'none',
  resize: 'none',
  ...colorStyles,
})

export const InputIcon = styled.div({
  margin: 0,
  padding: 0,
  border: 'none',
  backgroundColor: Base.TRANSPARENT,
  height: calc(CalcType.spacing, 5),
  width: calc(CalcType.spacing, 5),
  '&.icon-left': {
    marginLeft: 0,
    marginRight: calc(CalcType.spacing, 2),
  },
  '&.icon-right': {
    marginLeft: calc(CalcType.spacing, 2),
    marginRight: 0,
  },
  '&.pointer': {
    cursor: 'pointer',
  },
  '& > svg': {
    color: Gray.V250,
    minHeight: '18px',
    minWidth: '18px',
  },
})
