import styled from 'styled-components'

export const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.bgPage};
`

export const Card = styled.div`
  width: 100%;
  height: 100%;

  padding: ${({ theme }) => theme.additionalSpaces[1] + 2}px
    ${({ theme }) => theme.additionalSpaces[1] + 2}px
    ${({ theme }) => theme.additionalSpaces[1] + 2}px
    ${({ theme }) => theme.additionalSpaces[4] - 2}px;
`
