// Dependencies
import styled from 'styled-components'

// Theme
import { calc } from '../../theme'

// Types
import { CalcType } from '../../types'

// Components
import { InputWrapper } from '../Input/Input.styled'

// Base Class Name
export const BASE_CLASS_NAME = 'textField'

export const TextFieldBase = styled.div({
  width: '250px',
  [`& > ${InputWrapper}`]: {
    marginTop: calc(CalcType.spacing, 2),
  },
  [`&.${BASE_CLASS_NAME}-full-width`]: {
    width: '100%',
  },
  [`&.${BASE_CLASS_NAME}-helper-text`]: {
    '& > :last-child': {
      marginTop: calc(CalcType.spacing, 2),
    },
  },
})

export const TextFieldHelpersWrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
})
