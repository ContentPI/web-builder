import styled from 'styled-components'

export namespace CSS {
  export const AppIcon = styled.div({
    '.icon': {
      color: 'white',
      borderRadius: '5px',
      width: '60px',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '8px',
      textTransform: 'capitalize',
      fontSize: '40px',
      fontWeight: 600,
      margin: '0 auto'
    },
    '.iconName': {
      display: 'block',
      marginTop: '10px',
      textTransform: 'capitalize'
    }
  })

  export const Cards = styled.div({
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '40px',
    paddingTop: '50px',
    margin: '0 auto',
    width: '98%',
    h1: {
      padding: '0px',
      margin: '0 auto',
      textalign: 'left',
      width: '96%'
    },
    ul: {
      listStyle: 'none',
      padding: '0px',
      margin: '0px',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      li: {
        a: {
          paddingTop: '10px',
          color: 'black',
          textDecoration: 'none',
          '&:hover': {
            color: 'blue'
          }
        },
        '.card': {
          width: '210px',
          height: '260px',
          boxShadow: 'gray 0px 2px 4px',
          borderColor: 'white',
          borderRadius: '4px',
          margin: '70px 50px 50px 0px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxSizing: 'border-box',
          '&:hover': {
            cursor: 'pointer'
          },
          '.createNewApp': {
            margin: '20px',
            textTransform: 'capitalize'
          },
          '.app': {
            borderRadius: '5px',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '8px',
            color: 'white',
            textTransform: 'uppercase',
            fontSize: '18px',
            fontWeight: 600,
            i: {
              fontSize: '70px',
              color: 'black',
              padding: '8px'
            }
          }
        }
      }
    }
  })
}
