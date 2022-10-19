import styled from 'styled-components'

import theme from '@/theme'

export const PreHeaderWrapper = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.sizes[3]}px;
  min-width: ${({ theme }) => theme.sizes[21]}px;

  background-color: ${({ theme }) =>
    theme.colors.bgHeaderMain};
`

export const PreHeaderBtn = styled.div`
  box-sizing: border-box;
  width: 50%;
  height: 100%;

  border: 2px solid ${theme.colors.white};

  &.active {
    background-color: ${({ theme }) =>
      theme.colors.bgHeaderSecondary};

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
  font-weight: ${({ theme }) => theme.fontWeights[2]};
  font-size: ${theme.fontSizes[1]}px;

  color: ${theme.colors.fontColorSecondary};
`
