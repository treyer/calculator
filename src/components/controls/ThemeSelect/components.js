import styled from 'styled-components'

export const Select = styled.div`
  position: relative;

  box-sizing: border-box;
  width: 402px;
  height: 94px;

  padding-left: 27px;
  margin-bottom: 31px;

  font-size: ${({ theme }) => theme.fontSizes[5]}px;

  color: ${({ theme }) => theme.colors.fontColorPrimary};
  border: 2px solid
    ${({ theme }) => theme.colors.borderButton};
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.bgButton}
    url(/src/assets/img/svg/select_arrow.svg) 346px 34px
    no-repeat;

  cursor: pointer;

  &.opened {
    border-radius: 10px 10px 0 0;
  }

  &:hover,
  &:active {
    background-color: ${({ theme }) =>
      theme.colors.bgButtonHover};
  }
`

export const OptionsWrapper = styled.div`
  position: absolute;
  top: 90px;
  left: -2px;
`

export const SelectOption = styled.div`
  box-sizing: border-box;
  width: 402px;

  height: 59px;
  padding-left: 27px;

  border: 2px solid
    ${({ theme }) => theme.colors.borderOptions};
  background-color: ${({ theme }) => theme.colors.bgButton};

  &.hidden {
    display: none;
  }

  &:hover,
  &:active {
    background-color: ${({ theme }) =>
      theme.colors.bgButtonHover};
  }
`
