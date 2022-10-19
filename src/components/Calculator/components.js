import styled from 'styled-components'

export const CalculatorWrapper = styled.div`
  width: 100%;
  height: calc(100vh - ${({ theme }) => theme.sizes[12]}px);
`

export const CalculatorInner = styled.div`
  width: 100%;
  height: 100%;
`

export const CalculatorMain = styled.div`
  width: 100%;
  height: 100%;
`

export const KeypadWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
`
