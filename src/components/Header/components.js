import styled from 'styled-components'

import theme from '@/theme'

export const HeaderWrapper = styled.header`
  height: ${({ theme }) => theme.sizes[9]}px;
  min-width: ${({ theme }) => theme.sizes[21]}px;

  background-color: ${({ theme }) =>
    theme.colors.bgHeaderMain};
`
export const HeaderInner = styled.div`
  width: 100%;
  height: 100%;

  max-width: ${({ theme }) => theme.size.large}px;

  padding: 0 ${theme.spaces[4]}px;
  margin: 0 auto;
`
