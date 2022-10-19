import styled from 'styled-components'

export const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.bgPage};
`

export const Card = styled.div`
  width: 100%;
  height: 100%;

  padding: ${({ theme }) => theme.spaces[6]}px
    ${({ theme }) => theme.spaces[7]}px;
`

export const SettingsBox = styled.div`
  width: ${({ theme }) => theme.sizes[18] + 7}px;
  height: ${({ theme }) => theme.sizes[17]}px;
`

export const Heading = styled.h3`
  margin-bottom: ${({ theme }) =>
    theme.additionalSpaces[6] - 2}px;

  font-weight: ${({ theme }) => theme.fontWeights[2]};
  font-size: ${({ theme }) => theme.fontSizes[8]}px;
`
export const InputBox = styled.div`
  margin-left: ${({ theme }) => theme.spaces[2] - 1}px;
`

export const InputLabel = styled.h4`
  margin-bottom: ${({ theme }) => theme.spaces[2] + 4}px;
  margin-left: ${({ theme }) => theme.spaces[1] - 1}px;

  font-weight: ${({ theme }) => theme.fontWeights[3]};
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
`
