import styled from 'styled-components'

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: ${({ theme }) => theme.sizes[10]}px;
  max-width: ${({ theme }) => theme.sizes[22]}px;
  min-width: ${({ theme }) => theme.sizes[19]}px;

  border-bottom: 3px solid
    ${({ theme }) => theme.colors.borderButton};
`
export const OutputWrapper = styled.div`
  position: relative;

  width: 100%;
  height: ${({ theme }) => theme.sizes[6]}px;
  margin: 0 ${({ theme }) => theme.additionalSpaces[5]}px;

  background-color: ${({ theme }) => theme.colors.white};

  overflow: hidden;
`

export const Output = styled.div`
  position: absolute;
  right: 0;
  top: ${({ theme }) => theme.additionalSpaces[1]}px;

  height: ${({ theme }) => theme.sizes[5]}px;
  margin: 0 ${({ theme }) => theme.additionalSpaces[4]}px;

  font-size: ${({ theme }) => theme.fontSizes[6] + 8}px;
  line-height: ${({ theme }) => theme.fontSizes[8]}px;

  white-space: nowrap;
`

export const ExpressionOutput = styled.div`
  position: absolute;
  right: 0;
  top: ${({ theme }) => theme.spaces[1] + 1}px;

  height: ${({ theme }) => theme.sizes[1]}px;
  margin: 0 ${({ theme }) => theme.additionalSpaces[4]}px;

  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes[5] - 4}px;
  line-height: ${({ theme }) => theme.fontSizes[3]}px;

  white-space: nowrap;
`
