// Dependencies
import styled, { createGlobalStyle, CSSObject } from 'styled-components'

// Theme
import { Base, Gray } from '../../theme'

export const GlobalStyle = createGlobalStyle({
  'html, body': {
    margin: 0,
    height: '100%',
    overflow: 'hidden',
  },
  ':root': {
    scrollbarColor: `${Gray.V300} ${Base.WHITE} !important`,
  },
  '::-webkit-scrollbar': {
    width: '8px',
    height: '3px',
  },
  '::-webkit-scrollbar-track-piece': {
    backgroundColor: Base.WHITE,
  },
  '::-webkit-scrollbar-thumb': {
    height: '20px',
    backgroundColor: Gray.V300,
    borderRadius: '10px',
  },
  input: {
    borderRadius: 0,
    appearance: 'none',
  },
})

export const Dialog = styled.div({
  position: 'fixed',
  zIndex: 9999,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
})

interface IContainerProps {
  height?: string
  margin?: string
  maxWidth?: string
}

export const Container = styled.div<IContainerProps>(({ maxWidth, height, margin }) => {
  const css: CSSObject = {
    position: 'relative',
    backgroundColor: Base.WHITE,
    padding: '12px',
    boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.62)',
    border: `1px solid ${Gray.V250}`,
    '@media (max-width: 768px)': {
      height: '100%',
      margin: 0,
      border: 'none',
      maxWidth: '100%',
    },
  }

  if (maxWidth) {
    css.maxWidth = maxWidth
  }

  if (height) {
    css.height = height
  }

  if (margin) {
    css.margin = margin
  }

  return css
})

export const Close = styled.span({
  cursor: 'pointer',
  marginTop: '-6px',
  position: 'absolute',
  right: '10px',
  '@media (max-width: 768px)': {
    marginTop: 0,
    right: '15px',
  },
})

export const Img = styled.img({
  width: '12px',
  '@media (max-width: 768px)': {
    width: '16px',
  },
})

export const Content = styled.div({
  maxWidth: '100%',
  maxHeight: '500px',
  margin: '0 auto',
  marginTop: '9px',
  overflowY: 'auto',
  overflowX: 'hidden',
  textAlign: 'left',
  '.label': {
    margin: 0,
    padding: 0,
    marginBottom: '15px',
    fontSize: '23px',
    fontWeight: 500,
    wordWrap: 'break-word',
  },
  textarea: {
    resize: 'none',
  },
})
