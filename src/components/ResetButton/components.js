import styled from 'styled-components'

export const Button = styled.a`
  display: inline-block;

  box-sizing: border-box;
  width: 402px;
  height: 94px;
  padding-left: 27px;

  font-size: ${({ theme }) => theme.fontSizes[5]}px;

  border: 2px solid #434343;
  border-radius: 10px;

  cursor: pointer;
`
