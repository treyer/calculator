import styled from 'styled-components'

export const Select = styled.div`
  position: relative;

  box-sizing: border-box;
  width: ${({ theme }) => theme.sizes[18]}px;
  height: ${({ theme }) => theme.sizes[7] + 4}px;

  padding-left: ${({ theme }) =>
    theme.additionalSpaces[2]}px;
  margin-bottom: ${({ theme }) => theme.spaces[4] - 1}px;

  font-size: ${({ theme }) => theme.fontSizes[5]}px;

  color: ${({ theme }) => theme.colors.fontColorPrimary};
  border: 2px solid
    ${({ theme }) => theme.colors.borderButton};
  border-radius: ${({ theme }) => theme.radiuses[1]}px;
  background: ${({ theme }) => theme.colors.bgButton}
    url(/src/assets/img/svg/select_arrow.svg) 346px 34px
    no-repeat;

  cursor: pointer;

  &.opened {
    border-radius: ${({ theme }) => theme.radiuses[1]}px
      ${({ theme }) => theme.radiuses[1]}px 0 0;
  }

  &:hover,
  &:active {
    background-color: ${({ theme }) =>
      theme.colors.bgButtonHover};
  }
`

export const OptionsWrapper = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.additionalSpaces[7]}px;
  left: -2px;
`

export const SelectOption = styled.div`
  box-sizing: border-box;

  width: ${({ theme }) => theme.sizes[18]}px;
  height: ${({ theme }) => theme.sizes[5] - 1}px;
  padding-left: ${({ theme }) =>
    theme.additionalSpaces[2]}px;

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
