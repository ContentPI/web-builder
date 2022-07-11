import styled from 'styled-components'

import { Base, calc, Gray, mapColorStyles, themeCssVars } from '../../theme'
import { CalcType, Colors, FontSize } from '../../types'

// Base Class Name
export const BASE_CLASS_NAME = 'input'

// Color
const colorStyles: any = mapColorStyles(Colors, BASE_CLASS_NAME, themeCssVars, {
  borderColor: 'main',
  '&:hover': {
    borderColor: 'main'
  }
})

export namespace CSS {
  export const InputWrapper = styled.div`
    padding: ${calc(CalcType.padding, [3.25, 4])};
    margin: ${calc(CalcType.spacing, [2, 0])};
    margin-bottom: 20px;
    background: ${Base.WHITE};
    border: 1px solid ${Base.WHITE};
    box-sizing: border-box;
    box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
    border-radius: ${calc(CalcType.spacing, 2)};
    width: 250px;

    &.disabled {
      background: #eee;
    }

    &::placeholder {
      color: ${Base.WHITE};
      opacity: 1;
    }

    &:hover {
      border-color: ${themeCssVars.palette.primary.common.main};
    }

    &.${BASE_CLASS_NAME}-focus {
      border-color: ${themeCssVars.palette.primary.common.main};
    }

    &.${BASE_CLASS_NAME}-full-width {
      width: 100%;
    }

    display: flex;
    align-items: center;
    ${colorStyles}
  `

  export const InputBase = styled.input`
    width: 100%;
    background: ${Base.TRANSPARENT};
    border: none;
    font-size: ${FontSize.regular};
    font-family: inherit;
    line-height: 20px;
    outline: none;
    resize: none;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
    }

    &:disabled {
      background: #eee;
    }

    ${colorStyles}
  `

  export const InputIcon = styled.div`
    margin: 0;
    padding: 0;
    border: none;
    background-color: ${Base.TRANSPARENT};
    height: ${calc(CalcType.spacing, 5)};
    width: ${calc(CalcType.spacing, 5)};

    &.icon-left {
      margin-left: 0;
      margin-right: ${calc(CalcType.spacing, 2)};
    }

    &.icon-right {
      margin-left: ${calc(CalcType.spacing, 2)};
      margin-right: 0;
    }

    &.pointer {
      cursor: 'pointer';
    }

    & > svg {
      color: ${Gray.V250};
      min-height: 18px;
      min-width: 18px;
    }
  `
}
