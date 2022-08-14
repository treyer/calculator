import styled from 'styled-components'

export const KeyBody = styled.div`
  box-sizing: border-box;
  width: calc(((100vh - 310px) / 4) * 0.8);
  height: calc(((100vh - 310px) / 4) * 0.8);
  max-width: 150px;
  max-height: 150px;
  min-width: 55px;
  min-height: 55px;
  margin: 3px;

  border: 1px solid ${({ theme }) => theme.colors.borderKey};
  border-radius: 10px;
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
`

export const KeyText = styled.h5`
  font-weight: ${({ theme }) => theme.fontWeights[3]};
  font-size: 48px;

  color: ${({ theme }) => theme.colors.fontColorPrimary};
`
