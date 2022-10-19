import styled from 'styled-components'

export const KeyBody = styled.div`
  box-sizing: border-box;
  width: calc(((100vh - 310px) / 4) * 0.8);
  height: calc(((100vh - 310px) / 4) * 0.8);
  max-width: ${({ theme }) => theme.sizes[11]}px;
  max-height: ${({ theme }) => theme.sizes[11]}px;
  min-width: ${({ theme }) => theme.sizes[4]}px;
  min-height: ${({ theme }) => theme.sizes[4]}px;
  margin: ${({ theme }) => theme.spaces[1] - 1}px;

  border: 1px solid ${({ theme }) => theme.colors.borderKey};
  border-radius: ${({ theme }) => theme.radiuses[1]}px;
  background-color: ${({ theme }) => theme.colors.bgButton};

  cursor: pointer;

  &.error {
    background-color: ${({ theme }) =>
      theme.colors.bgButtonError};
  }

  &.error:hover {
    background-color: ${({ theme }) =>
      theme.colors.bgButtonError};
  }

  &:hover,
  &:active {
    background-color: ${({ theme }) =>
      theme.colors.bgButtonHover};
  }

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export const KeyText = styled.h5`
  font-weight: ${({ theme }) => theme.fontWeights[3]};
  font-size: ${({ theme }) => theme.fontSizes[6] + 8}px;

  color: ${({ theme }) => theme.colors.fontColorPrimary};
`
