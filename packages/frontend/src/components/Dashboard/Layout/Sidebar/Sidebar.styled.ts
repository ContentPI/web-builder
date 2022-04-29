import styled from 'styled-components'

import Config from '~/config'

const mainColor = Config.theme?.brandColors[0]

export namespace CSS {
  export const Header = styled.header({
    backgroundColor: '#f5f5f5',
    paddingLeft: '10px',
    paddingRight: '10px',
    '.logo': {
      height: '45px',
      marginTop: '5px'
    }
  })

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
    backgroundColor: mainColor,
    top: '0.5px',
    width: '240px',
    height: '100vh',
    position: 'fixed',
    zIndex: 900,
    left: 0,
    '.profile': {
      marginTop: '20px',
      textAlign: 'center',
      color: 'white',
      '.role': {
        color: '#ccc',
        fontSize: '13px',
        textTransform: 'uppercase'
      },
      img: {
        display: 'block',
        margin: '0 auto',
        borderRadius: '50%',
        width: '100px',
        padding: '5px',
        border: '3px solid white'
      }
    },
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
      color: '#CCC',
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
        lineHeight: '40px',
        cursor: 'pointer'
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
          color: '#000',
          '&:hover': {
            color: mainColor
          }
        }
      }
    }
  })
}
