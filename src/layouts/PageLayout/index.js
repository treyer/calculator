import styled from 'styled-components'

export const PageLayout = styled.div`
  width: 100%;
  height: calc(100vh - 120px);

  max-width: ${({ theme }) => theme.size.large}px;

  padding: ${({ theme }) => theme.spaces[4]}px;
  margin: 0 auto;
`
