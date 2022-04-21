import styled from 'styled-components'

export namespace CSS {
  export const Icon = styled.span({
    display: 'flex',
    alignItems: 'center',
    marginRight: '10px'
  })

  export const Item = styled.div({
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '10px',
    svg: {
      width: '15px'
    }
  })

  export const Sidebar = styled.aside({
    borderRight: '1px solid rgba(72, 94, 144, 0.16)',
    backgroundColor: '#002f4f',
    width: '240px',
    height: '100vh',
    position: 'fixed',
    zIndex: 900,
    left: 0,
    a: {
      color: '#CCC',
      textDecoration: 'none',
      display: 'flex',
      justifyContent: 'space-between',
      '&:hover': {
        color: 'white'
      }
    },
    h4: {
      textIndent: '10px',
      color: '#8392a5',
      fontWeight: 500,
      fontSize: '12px',
      marginTop: '10px',
      textTransform: 'uppercase'
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
      display: 'flex',
      flexDirection: 'column',
      textIndent: '10px',
      fontWeight: 500,
      '.submenu': {
        maxHeight: 0,
        overflow: 'hidden',
        transition: 'max-height 0.25s linear',
        '&.active': {
          maxHeight: '200px'
        },
        backgroundColor: 'white',
        fontWeight: 400,
        textIndent: '35px',
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
