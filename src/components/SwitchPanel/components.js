import styled from 'styled-components'

export const PanelWrapper = styled.div`
  position: relative;

  width: 300px;
  height: 30px;
  margin-right: 50px;
`
export const PanelText = styled.h6`
  width: 90px;

  font-weight: ${({ theme }) => theme.fontWeights[2]};
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
  text-align: center;

  &.active {
    font-weight: ${({ theme }) => theme.fontWeights[4]};
  }
`
export const PanelLabel = styled.h5`
  position: absolute;
  top: -18px;

  width: 300px;

  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeights[2]};
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
`
