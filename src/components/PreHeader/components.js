import styled from 'styled-components'

import theme from '@/theme'

export const PreHeaderWrapper = styled.header`
  width: 100%;
  height: 30px;

  background-color: #434343;
`

export const PreHeaderButton = styled.div`
  box-sizing: border-box;
  width: 50%;
  height: 100%;

  border: 2px solid ${theme.colors.white};

  &.active {
    background-color: #7c7c7c;

    cursor: default;
  }

  &:not(.active):hover {
    opacity: 0.7;

    cursor: pointer;
  }

  &:last-child {
    border-left: 0;
  }
`
export const ButtonText = styled.h4`
  font-weight: 300;
  font-size: ${theme.fontSizes[1]}px;

  color: ${theme.colors.white};
`
