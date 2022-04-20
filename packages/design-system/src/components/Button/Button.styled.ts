import styled, { CSSObject } from 'styled-components'

import { getClass, mapColorStyles, themeCssVars } from '../../theme'
import { ButtonVariant, Colors, FontSize, Shape, Size } from '../../types'

// Base Class Name
export const BASE_CLASS_NAME = 'btn'

// Variant
const variantStyles: CSSObject = {
  [`&.${BASE_CLASS_NAME}-${ButtonVariant.outlined}`]: mapColorStyles(
    Colors,
    BASE_CLASS_NAME,
    themeCssVars,
    {
      backgroundColor: 'transparent',
      color: 'main',
      borderColor: 'main',
      '&:hover': {
        backgroundColor: 'dark',
        color: 'contrastText'
      },
      '&:hover a': {
        color: 'contrastText'
      }
    }
  ),
  [`&.${BASE_CLASS_NAME}-${ButtonVariant.contained}`]: mapColorStyles(
    Colors,
    BASE_CLASS_NAME,
    themeCssVars,
    {
      backgroundColor: 'main',
      color: 'contrastText',
      '&:hover': {
        backgroundColor: 'dark',
        color: 'contrastText'
      }
    }
  )
}

// Size
const sizeStyles: CSSObject = {
  fontSize: FontSize.regular,
  lineHeight: '16px',
  [`&.${BASE_CLASS_NAME}-${Size.xSmall}`]: {
    img: {
      left: '4px',
      top: '-1px',
      "*[dir='rtl'] &": {
        right: '4px'
      }
    },
    fontSize: FontSize.small,
    lineHeight: '14px',
    padding: '0.2rem 0.7rem'
  },
  [`&.${BASE_CLASS_NAME}-${Size.small}`]: {
    img: {
      left: '10px',
      top: '7px',
      "*[dir='rtl'] &": {
        right: '10px'
      }
    },
    padding: '0.27rem 0.8rem'
  },
  [`&.${BASE_CLASS_NAME}-${Size.medium}`]: {
    padding: '0.5rem 1rem'
  },
  [`&.${BASE_CLASS_NAME}-${Size.large}`]: {
    img: {
      top: '15px',
      left: '14px',
      "*[dir='rtl'] &": {
        right: '14px'
      }
    },
    padding: '0.75rem 1.1rem'
  },
  [`&.${BASE_CLASS_NAME}-${Size.xLarge}`]: {
    img: {
      top: '15px',
      left: '14px',
      "*[dir='rtl'] &": {
        right: '14px'
      }
    },
    padding: '1rem 1.5rem'
  }
}

// Button Styles
const buttonStyles: CSSObject = {
  [`&.${BASE_CLASS_NAME}`]: {
    minWidth: '6.875rem',
    marginRight: '0.25rem',
    marginBottom: '0.5rem',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.8rem',
    fontWeight: 400,
    fontSize: '1rem',
    display: 'inline-block',
    lineHeight: 1.5,
    textAlign: 'center',
    textDecoration: 'none',
    verticalAlign: 'middle',
    cursor: 'pointer',
    userSelect: 'none',
    backgroundColor: 'transparent',
    border: '1px solid transparent',
    transition:
      'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out'
  },
  [`&.${BASE_CLASS_NAME}-disabled`]: {
    pointerEvents: 'none',
    opacity: 0.5
  },
  [`&.${BASE_CLASS_NAME}-full-width`]: {
    display: 'block',
    width: '100%'
  },
  '&:not(:disabled)': {
    cursor: 'pointer'
  }
}

// Shape
const shapeStyles: CSSObject = {
  borderRadius: '0.25rem',
  [`&.${getClass(BASE_CLASS_NAME, Shape.round)}`]: {
    borderRadius: '2rem'
  },
  [`&.${getClass(BASE_CLASS_NAME, Shape.square)}`]: {
    borderRadius: 0
  }
}

// Button component
export namespace CSS {
  export const Button = styled.button({
    position: 'relative',
    img: {
      position: 'absolute',
      left: '15px',
      top: '15px',
      "*[dir='rtl'] &": {
        right: '15px'
      }
    },
    ...shapeStyles,
    ...sizeStyles,
    ...buttonStyles,
    ...variantStyles
  })

  // LinkButton component
  export const LinkButton = styled.span({
    marginRight: '5px',
    a: {
      color: 'inherit',
      display: 'inline-block',
      position: 'relative',
      textDecoration: 'none',
      img: {
        position: 'absolute',
        top: '3px',
        left: '-10px',
        "*[dir='rtl'] &": {
          right: '-6px'
        }
      }
    },
    ...shapeStyles,
    ...sizeStyles,
    ...buttonStyles,
    ...variantStyles
  })
}
