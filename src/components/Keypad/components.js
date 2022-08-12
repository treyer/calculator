import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);

  width: 100%;
  height: calc(100vh - 340px);
  max-height: 1000px;
  padding: 0 94px 0 0;
`
