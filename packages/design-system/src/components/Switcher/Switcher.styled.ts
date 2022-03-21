// Dependencies
import styled from 'styled-components'

// Theme
import { Base, Gray, Green } from '../../theme'

export const Switcher = styled.div`
  display: inline-block;
  line-height: 34px;
  margin-bottom: 30px;
`

export const Text = styled.span`
  padding-left: 15px;
  font-size: 15px;
  color: ${Gray.V300};
`

export const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`

export const Input = styled.input`
  opacity: 0;
  width: 0px;
  height: 0px;
  &:checked + .slider {
    background-color: ${Green.V300};
  }
  &:focus + .slider {
    box-shadow: 0 0 1px ${Green.V300};
  }
  &:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`

export const SquareSpan = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${Gray.V200};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: ${Base.WHITE};
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`

export const RoundSpan = styled(SquareSpan)`
  border-radius: 34px;
  &:before {
    border-radius: 50%;
  }
`
