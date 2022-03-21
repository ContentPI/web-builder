// Dependencies
import styled from 'styled-components'

// Theme
import { calc, themeCssVars, mapColorStyles, Base } from '../../theme'

// Types
import { CalcType, Colors, FontSize } from '../../types'

// Base Class Name
export const BASE_CLASS_NAME = 'textarea'

// Color
const colorStyles = mapColorStyles(Colors, BASE_CLASS_NAME, themeCssVars, {
  borderColor: 'main',
  '&:hover': {
    borderColor: 'main',
  },
})

export const TextAreaWrapper = styled.div({
  padding: calc(CalcType.padding, [3.25, 4]),
  margin: calc(CalcType.spacing, [2, 0]),
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

export const TextArea = styled.textarea({
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
