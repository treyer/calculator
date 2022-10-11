import styled from 'styled-components'

export const HistoryWrapper = styled.div`
  position: relative;

  box-sizing: border-box;
  width: ${({ isShown }) => (isShown ? '391px' : '1px')};
  height: calc(100vh - 224px);
  max-height: 1120px;
  margin-left: 22px;

  border-left: 3px solid
    ${({ theme }) => theme.colors.borderButton};

  transition: width 0.5s ease-in-out;
`

export const Heading = styled.h3`
  display: ${({ isShown }) => (isShown ? 'block' : 'none')};
  margin-top: 11px;

  font-weight: ${({ theme }) => theme.fontWeights[3]};
  font-size: ${({ theme }) => theme.fontSizes[5]}px;

  text-align: center;

  transition-property: display;
  transition-delay: 0.6s;
`

export const ContentBox = styled.div`
  display: ${({ isShown }) => (isShown ? 'block' : 'none')};
  width: 324px;
  height: calc(100vh - 340px);
  margin-top: 56px;
  margin-left: 52px;

  overflow-y: scroll;

  transition-property: display;
  transition-delay: 0.6s;

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

export const ExpressionHistory = styled.h5`
  position: relative;

  margin-bottom: 10px;
  padding: 5px;

  font-weight: ${({ theme }) => theme.fontWeights[3]};
  font-size: 30px;

  cursor: pointer;

  border-radius: 5px;

  &.error,
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

export const RemoveBtn = styled.div`
  position: absolute;
  top: 3px;
  right: 3px;

  font-size: 15px;
  line-height: 15px;

  color: ${({ theme }) => theme.colors.fontColorRemoveBtn};
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`
