// Dependencies
import styled, { CSSObject } from 'styled-components'

// Utils
import { getClass, themeCssVars, mapColorStyles } from '../../theme'

// Types
import { Colors, Shape, FontSize, FontWeight } from '../../types'

// Base Class Name
export const BASE_CLASS_NAME = 'alert'

// Color
const colorStyles = mapColorStyles(Colors, BASE_CLASS_NAME, themeCssVars, {
  backgroundColor: 'main',
  color: 'contrastText',
})

// Shape
const shapeStyles: CSSObject = {
  borderRadius: '0.25rem',
  [`&.${getClass(BASE_CLASS_NAME, Shape.round)}`]: {
    borderRadius: '2rem',
  },
  [`&.${getClass(BASE_CLASS_NAME, Shape.square)}`]: {
    borderRadius: 0,
  },
}

// Component
export const Avatar = styled.div({
  fontSize: FontSize.medium,
  fontWeight: FontWeight.heavy,
  height: '40px',
  lineHeight: '40px',
  marginBottom: '1rem',
  textAlign: 'center',
  textTransform: 'uppercase',
  width: '40px',
  ...colorStyles,
  ...shapeStyles,
})
