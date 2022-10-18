import styled from 'styled-components'

export const Button = styled.a`
  display: inline-block;

  box-sizing: border-box;
  width: 100px;
  height: 30px;
  padding-left: 27px;
  margin-left: 20px;
  margin-bottom: 12px;

  font-size: ${({ theme }) => theme.fontSizes[3]}px;

  color: ${({ theme }) => theme.colors.fontColorPrimary};
  background-color: ${({ theme }) => theme.colors.bgButton};
  border: 2px solid
    ${({ theme }) => theme.colors.borderButton};
  border-radius: 10px;

  cursor: pointer;

  &:hover,
  &:active {
    background-color: ${({ theme }) =>
      theme.colors.bgButtonHover};
  }
`
