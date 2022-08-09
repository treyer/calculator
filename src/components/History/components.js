import styled from 'styled-components'

export const HistoryWrapper = styled.div`
  box-sizing: border-box;
  width: 391px;
  height: calc(100vh - 194px);
  margin-left: 22px;

  border-left: 3px solid
    ${({ theme }) => theme.colors.borderButton};
`

export const Heading = styled.h3`
  margin-top: 11px;

  font-weight: ${({ theme }) => theme.fontWeights[3]};
  font-size: ${({ theme }) => theme.fontSizes[5]}px;

  text-align: center;
`

export const ContentBox = styled.div`
  width: 324px;
  height: calc(100vh - 310px);
  margin-top: 56px;
  margin-left: 52px;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    width: 12px;
    background-color: ${({ theme }) =>
      theme.colors.bgScrollbarTrack};
  }

  &::-webkit-scrollbar-thumb {
    width: 12px;
    border-radius: 6px;
    background-color: ${({ theme }) =>
      theme.colors.bgScrollbar};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) =>
      theme.colors.bgScrollbarHover};
  }
`

export const OperationHistory = styled.h5`
  font-weight: ${({ theme }) => theme.fontWeights[3]};
  font-size: 30px;
`
