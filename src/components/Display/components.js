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
  height: 60px;
  margin: 0 50px;

  background-color: ${({ theme }) => theme.colors.white};

  overflow: hidden;
`

export const Output = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  height: 60px;
  margin: 0 44px;

  font-size: 48px;
  line-height: 60px;

  white-space: nowrap;
`
