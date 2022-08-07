import styled from 'styled-components'

export const Select = styled.select`
  box-sizing: border-box;
  width: 402px;
  height: 94px;

  padding-left: 27px;
  margin-bottom: 31px;

  font-size: ${({ theme }) => theme.fontSizes[5]}px;

  border: 2px solid #434343;
  border-radius: 10px;
  background: url(/src/assets/img/svg/select_arrow.svg)
    346px 34px no-repeat;

  appearance: none;
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
`

export const SelectOption = styled.option`
  &.hidden {
    display: none;
  }
`
