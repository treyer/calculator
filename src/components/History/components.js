import styled from 'styled-components'

export const HistoryWrapper = styled.div`
  position: relative;

  box-sizing: border-box;
  width: ${({ isShown }) => (isShown ? '391px' : '1px')};
  height: calc(100vh - ${({ theme }) => theme.sizes[13]}px);
  max-height: ${({ theme }) => theme.sizes[20]}px;
  margin-left: ${({ theme }) =>
    theme.additionalSpaces[1] + 2}px;

  border-left: 3px solid
    ${({ theme }) => theme.colors.borderButton};

  transition: width 0.5s ease-in-out;
`

export const Heading = styled.h3`
  display: ${({ isShown }) => (isShown ? 'block' : 'none')};
  margin-top: ${({ theme }) =>
    theme.additionalSpaces[0] + 1}px;

  font-weight: ${({ theme }) => theme.fontWeights[3]};
  font-size: ${({ theme }) => theme.fontSizes[5]}px;

  text-align: center;

  transition-property: display;
  transition-delay: 0.6s;
`

export const ContentBox = styled.div`
  display: ${({ isShown }) => (isShown ? 'block' : 'none')};
  width: ${({ theme }) => theme.sizes[15]}px;
  height: calc(100vh - ${({ theme }) => theme.sizes[16]}px);
  margin-top: ${({ theme }) => theme.additionalSpaces[6]}px;
  margin-left: ${({ theme }) =>
    theme.additionalSpaces[6] - 4}px;

  overflow-y: scroll;

  transition-property: display;
  transition-delay: 0.6s;

  &::-webkit-scrollbar {
    width: ${({ theme }) => theme.sizes[0]}px;
  }

  &::-webkit-scrollbar-track {
    width: ${({ theme }) => theme.sizes[0]}px;
    background-color: ${({ theme }) =>
      theme.colors.bgScrollbarTrack};
  }

  &::-webkit-scrollbar-thumb {
    width: ${({ theme }) => theme.sizes[0]}px;
    border-radius: ${({ theme }) => theme.radiuses[0]}px;
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

  margin-bottom: ${({ theme }) =>
    theme.additionalSpaces[0]}px;
  padding: ${({ theme }) => theme.spaces[1] + 1}px;

  font-weight: ${({ theme }) => theme.fontWeights[3]};
  font-size: ${({ theme }) => theme.fontSizes[5] - 2}px;

  cursor: pointer;

  border-radius: ${({ theme }) => theme.radiuses[0] - 1}px;

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
  top: ${({ theme }) => theme.spaces[1] - 1}px;
  right: ${({ theme }) => theme.spaces[1] - 1}px;

  font-size: ${({ theme }) => theme.fontSizes[1] + 1}px;
  line-height: ${({ theme }) => theme.fontSizes[1] + 1}px;

  color: ${({ theme }) => theme.colors.fontColorRemoveBtn};
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`
