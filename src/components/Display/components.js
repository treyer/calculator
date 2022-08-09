import styled from 'styled-components'

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 138px;
  max-width: 1446px;

  border-bottom: 3px solid
    ${({ theme }) => theme.colors.borderButton};
`
export const OutputWrapper = styled.div`
  width: 100%;
  height: 60px;
  margin: 0 50px;

  background-color: ${({ theme }) => theme.colors.white};

  overflow: hidden;
`

export const Output = styled.div`
  margin: 0 44px;
  font-size: 48px;
`
