import styled from 'styled-components'

export const CSSLogin = styled.div({
  display: 'flex',
  border: '1px solid red',
  height: '100vh',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center'
})

export const CSSLoginBox = styled.div({
  background: 'white',
  margin: '0 auto',
  boxShadow: '0 0 10px rgb(0 0 0 / 10%)',
  height: '600px',
  width: '100%',
  maxWidth: '1024px',
  header: {
    textAlign: 'center',
    img: {
      display: 'block',
      margin: '0 auto',
      paddingTop: '30px',
      width: '180px'
    }
  }
})
