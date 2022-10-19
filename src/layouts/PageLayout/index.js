import styled from 'styled-components'

export const PageLayout = styled.div`
  width: 100%;
  height: calc(100vh - ${({ theme }) => theme.sizes[11]}px);
  max-width: ${({ theme }) => theme.size.large}px;
  margin: 0 auto;
`
