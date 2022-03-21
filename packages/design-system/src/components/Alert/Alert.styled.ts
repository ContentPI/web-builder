// Dependencies
import styled, { CSSObject } from 'styled-components'

// Utils
import { getClass, mapColorStyles, themeCssVars } from '../../theme'

// Types
import { Alignment, Colors, Shape, FontSize, FontWeight } from '../../types'

// Base Class Name
export const BASE_CLASS_NAME = 'alert'

// Color
const colorStyles = mapColorStyles(Colors, BASE_CLASS_NAME, themeCssVars, {
  backgroundColor: 'main',
  borderColor: 'dark',
  color: 'contrastText',
  a: {
    color: 'contrastText',
    fontWeight: FontWeight.bold,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
})

// Shape
const shapeStyles: CSSObject = {
  borderRadius: '0.25rem',
  [`&.${getClass(BASE_CLASS_NAME, Shape.round)}`]: {
    borderRadius: '1rem',
  },
  [`&.${getClass(BASE_CLASS_NAME, Shape.square)}`]: {
    borderRadius: 0,
  },
}

// Alignment
const alignmentStyles: CSSObject = {
  textAlign: Alignment.left,
  [`&.${getClass(BASE_CLASS_NAME, Alignment.center)}`]: {
    textAlign: Alignment.center,
  },
  [`&.${getClass(BASE_CLASS_NAME, Alignment.right)}`]: {
    textAlign: Alignment.right,
  },
}

// Component
export const Alert = styled.div({
  border: '1px solid transparent',
  borderRadius: '0.25rem',
  fontSize: FontSize.regular,
  marginBottom: '1rem',
  padding: '0.75rem 1.25rem',
  position: 'relative',
  width: '100%',
  ...alignmentStyles,
  ...colorStyles,
  ...shapeStyles,
})
