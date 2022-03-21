import styled from 'styled-components'

// Types
import { mapColorStyles, themeCssVars, Gray } from '../../theme'
import { Colors } from '../../types'

// Base Class Name
export const BASE_CLASS_NAME = 'pagination'

// Color
const colorStyles = mapColorStyles(Colors, BASE_CLASS_NAME, themeCssVars, {
  '& > li > a > span.active': {
    color: 'contrastText',
    backgroundColor: 'main',
  },
  '& > li > a > span:hover': {
    color: 'contrastText',
    backgroundColor: 'main',
  },
})

export const Ul = styled.ul({
  listStyle: 'none',
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
  margin: '500 auto',
  marginTop: '90px',
  marginBottom: '50px',
  width: '100%',
  ...colorStyles,
})

export const Li = styled.li({
  margin: '5px',
  a: {
    color: Gray.V250,
    textDecoration: 'none',
  },
})

export const SpanLink = styled.span({
  padding: '15px 20px',
  borderRadius: '5px',
  i: {
    '*[dir="rtl"] &': {
      transform: 'rotateY(180deg)',
    },
  },
})
