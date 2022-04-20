import styled, { CSSProperties } from 'styled-components'

export namespace CSS {
  export const DashboardLayout = styled.div({})

  export const Header: CSSProperties = styled.header({
    borderBottom: '1px solid rgba(72, 94, 144, 0.16)',
    height: '60px',
    lineHeight: '60px',
    paddingLeft: '20px',
    img: {
      height: '45px',
      marginTop: '5px'
    }
  })

  export const FlexWrapper: CSSProperties = styled.div({
    display: 'flex'
  })

  export const Sidebar: CSSProperties = styled.aside({
    borderRight: '1px solid rgba(72, 94, 144, 0.16)',
    backgroundColor: '#002f4f',
    width: '240px',
    height: '100vh',
    position: 'fixed',
    zIndex: 900,
    left: 0,
    a: {
      color: 'white',
      textDecoration: 'none'
    },
    h4: {
      textIndent: '10px',
      color: '#8392a5',
      fontWeight: 500,
      fontSize: '12px',
      marginTop: '10px'
    },
    ul: {
      listStyle: 'none',
      fontSize: '14px',
      margin: 0,
      padding: 0,
      li: {
        lineHeight: '40px'
      }
    },
    '.menu': {
      textIndent: '10px',
      fontWeight: 500,
      '.submenu': {
        display: 'none',
        backgroundColor: 'white',
        fontWeight: 400,
        a: {
          display: 'block',
          color: '#05050b',
          '&:hover': {
            color: '#0066aa'
          }
        }
      }
    }
  })
}
