import styled from 'styled-components'

import theme from '@/theme'

export const LogoText = styled.h1`
  font-weight: ${theme.fontWeights[3]};
  font-size: ${({ theme }) => theme.fontSizes[5]}px;

  color: ${theme.colors.white};
`
