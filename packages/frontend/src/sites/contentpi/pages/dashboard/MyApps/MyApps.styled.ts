import styled from 'styled-components'

export namespace CSS {
  export const MyApps = styled.div({
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    minHeight: '70vh',
    width: '100%',
    '.header': {
      borderBottom: '1px solid #ccc',
      width: '100%',
      height: '70px',
      background: `linear-gradient(
        90deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(9, 9, 121, 1) 35%,
        rgba(0, 212, 255, 1) 100%
      )`,
      '.logo': {
        margin: '0 auto',
        paddingTop: '9px',
        img: {
          width: '50px',
          height: '50px'
        }
      }
    },
    '.flexFooter': {
      display: 'flex',
      marginTop: '350px'
    }
  })
}
