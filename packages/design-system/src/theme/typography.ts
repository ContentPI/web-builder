import { ITypography } from '../types'

const globalFontFamily = "'WorkSans'"

const typography: ITypography = {
  htmlFontSize: 16,
  fontFamily: globalFontFamily,
  fontSize: 16,
  h1: {
    fontFamily: globalFontFamily,
    fontWeight: 700,
    fontSize: '2.25rem',
    lineHeight: '48px',
    letterSpacing: '0.75px'
  },
  h2: {
    fontFamily: globalFontFamily,
    fontWeight: 700,
    fontSize: '2rem',
    lineHeight: '40px',
    letterSpacing: '0.75px'
  },
  h3: {
    fontFamily: globalFontFamily,
    fontWeight: 700,
    fontSize: '1.875rem',
    lineHeight: '48px',
    letterSpacing: '0.75px'
  },
  h4: {
    fontFamily: globalFontFamily,
    fontWeight: 700,
    fontSize: '1.625rem',
    lineHeight: '32px',
    letterSpacing: '0.75px'
  },
  h5: {
    fontFamily: globalFontFamily,
    fontWeight: 700,
    fontSize: '1.375rem',
    lineHeight: '32px',
    letterSpacing: '0.75px'
  },
  h6: {
    fontFamily: globalFontFamily,
    fontWeight: 700,
    fontSize: '1.125rem',
    lineHeight: '24px',
    letterSpacing: '0.75px'
  },
  subtitle1: {
    fontFamily: globalFontFamily,
    fontWeight: 500,
    fontSize: '1.125rem',
    lineHeight: '24px',
    letterSpacing: '0.75px'
  },
  subtitle2: {
    fontFamily: globalFontFamily,
    fontWeight: 500,
    fontSize: '0.875rem',
    lineHeight: '24px',
    letterSpacing: '0.75px'
  },
  paragraph1: {
    fontFamily: globalFontFamily,
    fontWeight: 400,
    fontSize: '0.938rem',
    lineHeight: '20px',
    letterSpacing: '0.75px'
  },
  paragraph2: {
    fontFamily: globalFontFamily,
    fontWeight: 400,
    fontSize: '0.813rem',
    lineHeight: '16px',
    letterSpacing: '0.75px'
  },
  caption1: {
    fontFamily: globalFontFamily,
    fontWeight: 400,
    fontSize: '0.75rem',
    lineHeight: '16px',
    letterSpacing: '0.75px'
  },
  caption2: {
    fontFamily: globalFontFamily,
    fontWeight: 500,
    fontSize: '0.75rem',
    lineHeight: '18px'
  },
  label: {
    fontFamily: globalFontFamily,
    fontWeight: 500,
    fontSize: '0.875rem',
    lineHeight: '24px',
    letterSpacing: '0.75px'
  }
}

export default typography
