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
      color: '#111',
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
      marginBottom: '1em',
      border: 'none',
      fontWeight: 800,
      textDecoration: 'none'
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
        overflow: 'hidden',
        display: 'flex'
      },
      '.event': {
        background: '#FF960F'
      },
      '.start': {
        marginLeft: '4px'
      },
      '.start b': {
        alignItems: 'center',
        lineHeight: '45px',
        background: '#003A66',
        display: 'inline-block',
        width: '30px',
        height: '60px',
        marginTop: '-5px',
        marginLeft: '-5px',
        textIndent: '5px',
        marginRight: '5px'
      },
      '.past': {
        background: '#4FCA0C'
      },
      '.same:not(:first-child) ': {
        color: 'transparent'
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
    'ol.dayGrid li.previousMonth, ol.dayGrid li.nextMonth .event': {
      opacity: '0.5'
    }
  })
}
