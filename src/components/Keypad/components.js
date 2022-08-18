import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);

  width: 100%;
  height: calc(100vh - 340px);
  max-height: 1000px;
  margin: 0 34px;

  &.advanced {
    grid-template-columns: repeat(6, 1fr);
  }
`
