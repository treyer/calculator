import styled from 'styled-components'

import theme from '@/theme'

export const HeaderWrapper = styled.header`
  height: 120px;

  background-color: #434343;
`
export const HeaderInner = styled.div`
  width: 100%;
  height: 100%;

  max-width: ${({ theme }) => theme.size.large}px;

  padding: 0 ${theme.spaces[4]}px;
  margin: 0 auto;
`
