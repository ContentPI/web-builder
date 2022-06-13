import styled from 'styled-components'

export namespace CSS {
  const listStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    margin: '0 auto',
    padding: 0,
    width: '100%'
  }

  export const Calendar = styled.div({
    header: {
      display: 'flex',
      alignItems: 'center',
      fontSize: 'calc(16px + (26 - 16) * ((100vw - 300px) / (1600 - 300)))',
      justifyContent: 'space-between',
      paddingLeft: '20px',
      paddingRight: '20px',
      marginBottom: '2em',
      background: '#000',
      color: '#fff',
      minHeight: '10vh',
      textAlign: 'center'
    },
    ol: listStyle,
    ul: listStyle,
    li: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      listStyle: 'none',
      marginLeft: 0,
      fontSize: 'calc(16px + (21 - 16) * ((100vw - 300px) / (1600 - 300)))'
    },
    'ul.weekdays': {
      marginBottom: '1em'
    },
    'ol.dayGrid li': {
      backgroundColor: '#fff',
      borderBottom: '1px solid #eaeaea',
      width: '100%',
      height: '200px',
      position: 'relative',

      '.dayNumber': {
        position: 'absolute',
        top: '5px',
        right: '5px',
        fontSize: '14px'
      },
      '.event, .nextEvent': {
        color: 'white',
        width: '100%',
        height: '35px',
        lineHeight: '35px',
        textAlign: 'left',
        fontSize: '14px',
        marginTop: '-100px',
        padding: '5px',
        textOverflow: 'ellipsis',
        overflow: 'hidden'
      },
      '.event': {
        background: '#2EA1F8'
      },
      '.nextEvent': {
        background: '#002F52'
      }
    },
    'ol.dayGrid li.today': {
      background: '#FFEBBD'
    },
    'ol.dayGrid li.previousMonth .dayNumber': {
      color: '#999'
    },
    'ol.dayGrid li.nextMonth .dayNumber': {
      color: '#999'
    },
    'ol.dayGrid li.previousMonth, ol.dayGrid li.nextMonth': {
      opacity: '0.5'
    },
    'ul.weekdays abbr[title]': {
      border: 'none',
      fontWeight: 800,
      textDecoration: 'none'
    }
  })
}
