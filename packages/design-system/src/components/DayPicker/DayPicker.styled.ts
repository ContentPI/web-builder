import styled from 'styled-components'

export namespace CSS {
  const listStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    padding: 0,
    width: '400px'
  }

  export const CalendarInput = styled.div({
    '.label': {
      marginBottom: '10px',
      fontSize: '14px',
      marginLeft: '4px',
      fontWeight: 600
    }
  })

  export const Calendar = styled.div({
    marginTop: '-20px',
    background: 'white',
    position: 'absolute',
    zIndex: 9999,
    header: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '16px',
      justifyContent: 'space-between',
      paddingLeft: '20px',
      paddingRight: '20px',
      paddingTop: '-10px',
      marginBottom: '2em',
      color: '#111',
      minHeight: '10vh',
      textAlign: 'center',
      width: '350px'
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
      marginBottom: '1em',
      border: 'none',
      fontWeight: 600,
      textDecoration: 'none',
      fontSize: '13px'
    },
    'ul.weekdays li': {
      fontSize: '16px'
    },
    'ol.dayGrid li': {
      backgroundColor: '#fff',
      border: '1px solid #eaeaea',
      width: '100%',
      height: '50px',
      position: 'relative',
      '&:hover': {
        backgroundColor: '#003A66',
        color: '#fff',
        cursor: 'pointer'
      },
      '&.taken': {
        color: 'black',
        background: '#ddd',
        cursor: 'default'
      },
      '.dayNumber': {
        fontSize: '14px',
        textAlign: 'center'
      },
      '.past': {
        background: '#ddd'
      },
      '.same:not(:first-child) ': {
        color: 'transparent'
      },
      '.nextEvent': {
        background: '#ddd'
      }
    },
    'ol.dayGrid li.today': {
      background: '#FFEBBD'
    },
    'ol.dayGrid li.previousMonth .dayNumber': {
      color: '#999',
      '&:hover': {
        color: 'red !important'
      }
    },
    'ol.dayGrid li.nextMonth .dayNumber': {
      color: '#999'
    },
    'ol.dayGrid li.previousMonth, ol.dayGrid li.nextMonth .event': {
      opacity: '0.5'
    }
  })
}
