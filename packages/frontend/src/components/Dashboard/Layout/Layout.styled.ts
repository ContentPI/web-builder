import styled, { createGlobalStyle } from 'styled-components'

import Config from '~/config'

const mainColor = Config.theme?.brandColors[0]

export namespace CSS {
  export const GlobalStyle = createGlobalStyle`
    body {
      background-color: #f5f5f5;
    }
  `

  export const DashboardLayout = styled.div({})

  export const FlexWrapper = styled.div({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: mainColor,
    borderBottom: `1px solid ${mainColor}`,
    height: '60px',
    '.wrapper': {
      marginLeft: '255px',
      transition: 'padding-left 0.3s linear'
    },
    '.full': {
      marginLeft: '10px',
      transition: 'padding-left 0.3s linear'
    },
    '.blocks': {
      marginTop: '10px',
      display: 'flex',
      justifyContent: 'space-around'
    }
  })

  export const Content = styled.div({
    backgroundColor: 'white',
    boxShadow: '0 1px 6px 1px rgb(69 65 78 / 10%)',
    marginTop: '20px',
    padding: '20px',
    marginRight: '10px',
    height: '100%',
    width: '100%'
  })
}
