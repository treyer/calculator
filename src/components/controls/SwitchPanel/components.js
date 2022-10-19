import styled from 'styled-components'

export const PanelWrapper = styled.div`
  position: relative;

  width: ${({ theme }) => theme.sizes[14]}px;
  height: ${({ theme }) => theme.sizes[3]}px;
  margin-right: ${({ theme }) =>
    theme.additionalSpaces[5]}px;
`
export const PanelText = styled.h6`
  width: ${({ theme }) => theme.sizes[7]}px;

  font-weight: ${({ theme }) => theme.fontWeights[2]};
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
  text-align: center;

  &.active {
    font-weight: ${({ theme }) => theme.fontWeights[4]};
  }
`
export const PanelLabel = styled.h5`
  position: absolute;
  top: -${({ theme }) => theme.spaces[3] + 2}px;

  width: ${({ theme }) => theme.sizes[14]}px;

  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeights[2]};
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
`
