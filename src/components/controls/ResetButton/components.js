import styled from 'styled-components'

export const Button = styled.a`
  display: inline-block;

  box-sizing: border-box;
  width: ${({ theme }) => theme.sizes[18]}px;
  height: ${({ theme }) => theme.sizes[7] + 4}px;
  padding-left: ${({ theme }) =>
    theme.additionalSpaces[2]}px;

  font-size: ${({ theme }) => theme.fontSizes[5]}px;

  color: ${({ theme }) => theme.colors.fontColorPrimary};
  background-color: ${({ theme }) => theme.colors.bgButton};
  border: 2px solid
    ${({ theme }) => theme.colors.borderButton};
  border-radius: ${({ theme }) => theme.radiuses[1]}px;

  cursor: pointer;

  &:hover,
  &:active {
    background-color: ${({ theme }) =>
      theme.colors.bgButtonHover};
  }
`
