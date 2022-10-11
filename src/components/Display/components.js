import styled from 'styled-components'

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 138px;
  max-width: 1446px;
  min-width: 700px;

  border-bottom: 3px solid
    ${({ theme }) => theme.colors.borderButton};
`
export const OutputWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 80px;
  margin: 0 50px;

  background-color: ${({ theme }) => theme.colors.white};

  overflow: hidden;
`

export const Output = styled.div`
  position: absolute;
  right: 0;
  top: 20px;

  height: 60px;
  margin: 0 44px;

  font-size: 48px;
  line-height: 60px;

  white-space: nowrap;
`

export const ExpressionOutput = styled.div`
  position: absolute;
  right: 0;
  top: 5px;

  height: 20px;
  margin: 0 44px;

  color: #404040;
  font-size: 28px;
  line-height: 20px;

  white-space: nowrap;
`
