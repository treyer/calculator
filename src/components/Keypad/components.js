import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);

  width: 100%;
  height: calc(100vh - ${({ theme }) => theme.sizes[16]}px);
  max-height: ${({ theme }) => theme.sizes[20] - 120}px;
  margin: 0
    ${({ theme }) => theme.additionalSpaces[3] + 2}px;

  &.advanced {
    grid-template-columns: repeat(6, 1fr);
  }
`
