import { device } from '@web-builder/design-system'
import styled from 'styled-components'

export const CSSLogin = styled.div({
  display: 'flex',
  height: '100vh',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  '.footer': {
    marginTop: '40px',
    textAlign: 'center',
    [device.laptop]: {
      fontSize: '13px'
    }
  },
  [device.laptop]: {
    width: '90%',
    margin: '0 auto'
  }
})

export const CSSLoginBox = styled.div({
  background: 'white',
  margin: '0 auto',
  boxShadow: '0 0 10px rgb(0 0 0 / 10%)',
  borderRadius: '20px',
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
  },
  section: {
    margin: '0 auto',
    width: '250px',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '30px',
    flexDirection: 'column',
    alignItems: 'center',
    '.forgot': {
      textAlign: 'right',
      alignSelf: 'end',
      fontSize: '13px',
      marginBottom: '25px',
      marginRight: '5px',
      width: '250px'
    }
  }
})
