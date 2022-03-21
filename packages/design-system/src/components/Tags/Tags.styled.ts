// Dependencies
import styled from 'styled-components'

// Theme
import { Gray } from '../../theme'

// Types
import { FontSize } from '../../types'

export const Tags = styled.div({
  backgroundColor: 'white',
  border: 'none',
  display: 'flex',
  flexDirection: 'column',
  padding: '20px 5px 20px 2px',
  touchCallout: 'none',
  userSelect: 'none',
  width: '100%',
  'div.label': {
    color: Gray.V200,
    fontSize: FontSize.regular,
    marginBottom: '5px',
    marginTop: '-15px',
    paddingLeft: '5px',
  },
  'div.tag': {
    background: Gray.V050,
    borderRadius: '5px',
    color: Gray.V250,
    cursor: 'pointer',
    display: 'inline-block',
    height: '30px',
    lineHeight: '30px',
    marginBottom: '8px',
    marginLeft: '5px',
    paddingLeft: '15px',
    paddingRight: '10px',
    '&:hover': {
      background: Gray.V100,
    },
    i: {
      fontSize: FontSize.regular,
      color: Gray.V200,
      marginLeft: '10px',
    },
  },
  input: {
    marginLeft: '10px',
    border: 'none',
    outline: 'none',
  },
})
