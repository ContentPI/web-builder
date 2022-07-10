import styled from 'styled-components'

export namespace CSS {
  export const Modal = styled.div({
    padding: '1rem',
    borderRadius: '15px',
    '.modalColumns': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    '.modalRows': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      '.modalRow': {
        width: '400px',
        margin: '0 1rem'
      }
    },
    label: {
      fontWeight: 500
    },
    '::-webkit-scrollbar': {
      display: 'none'
    },
    p: {
      fontSize: '14px',
      lineHeight: '25px',
      letterSpacing: '0.2px',
      '&.center': {
        textAlign: 'center'
      }
    },
    '.entryBlock': {
      display: 'flex',
      justifyContent: 'space-between',
      cursor: 'pointer',
      padding: '5px 10px',
      marginBottom: '20px',
      boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.05)',
      width: '95%'
    },
    '.values': {
      '> div': {
        height: '200px',
        overflowY: 'scroll',
        overflowX: 'hidden'
      }
    },
    '.toggles': {
      display: 'flex',
      justifyContent: 'space-between',
      maxWidth: '570px',
      span: {
        fontSize: '13px'
      }
    },
    '.actions': {
      display: 'flex',
      justifyContent: 'center',
      textTransform: 'capitalize',
      width: '98.9%',
      margin: 'auto 0.5rem',
      '&.center': {
        justifyContent: 'space-between'
      }
    },
    '.datePickers': {
      display: 'flex',
      justifyContent: 'space-between',
      SingleDatePickerInput__withBorder: {
        border: 'none'
      }
    },
    '.InputWrapper': {
      padding: 'calc(13px) calc(16px)',
      marginBottom: '20px',
      background: 'rgb(255, 255, 255)',
      border: '1px solid rgb(255, 255, 255)',
      boxSizing: 'border-box',
      boxShadow: 'rgb(0 0 0 / 7%) 0px 7px 64px',
      borderRadius: 'calc(8px)',
      display: 'flex',
      webkitBoxAlign: 'center',
      alignItems: 'center',
      width: '100%',
      '.moneyInput': {
        width: '100%',
        background: 'white',
        border: 'none',
        fontSize: '14px',
        fontFamily: 'inherit',
        lineHeight: '20px',
        outline: 'none',
        resize: 'none'
      }
    },
    '.picker-container': {
      height: '500px'
    }
  })
}
