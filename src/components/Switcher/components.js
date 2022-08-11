import styled from 'styled-components'

export const Label = styled.label`
  position: relative;

  display: inline-block;
  width: 60px;
  height: 30px;

  & input {
    width: 0;
    height: 0;

    opacity: 0;
  }
`
export const Input = styled.input.attrs({
  type: 'checkbox',
})`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + .slider {
    background-color: ${({ theme }) =>
      theme.colors.bgSwitcherActive};
  }

  &:focus + .slider {
    box-shadow: 0 0 1px
      ${({ theme }) => theme.colors.bgSwitcherActive};
  }

  &:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`
export const Slider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: ${({ theme }) =>
    theme.colors.bgSwitcher};
  border-radius: 30px;

  cursor: pointer;
  transition: 0.4s;
  -webkit-transition: 0.4s;

  &:before {
    content: '';

    position: absolute;
    left: 4px;
    bottom: 3px;

    height: 24px;
    width: 24px;

    background-color: ${({ theme }) =>
      theme.colors.bgSwitcherThumb};
    border-radius: 50%;

    transition: 0.4s;
    -webkit-transition: 0.4s;
  }
`
