import styled from 'styled-components'

export const CSSWrapper = styled.div({
  alignItems: 'center',
  backgroundColor: '#000',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minHeight: '100vh',
  width: '100vw'
})

export const CSSLogo = styled.img({})

export const CSSReservationText = styled.a({
  color: 'white',
  textDecoration: 'none',
  fontSize: '24px',
  margin: '2rem 0'
})

export const CSSAction = styled.a({
  margin: '1rem 0.25rem'
})
