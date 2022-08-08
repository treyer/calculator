import styled from 'styled-components'

export const PageLayout = styled.div`
  width: 100%;
  height: calc(100vh - 150px);
  max-width: ${({ theme }) => theme.size.large}px;
  margin: 0 auto;
`
