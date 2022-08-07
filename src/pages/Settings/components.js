import styled from 'styled-components'

export const Card = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.white};

  padding: ${({ theme }) => theme.spaces[6]}px
    ${({ theme }) => theme.spaces[7]}px;
`

export const SettingsBox = styled.div`
  width: 409px;
  height: 365px;
`

export const Heading = styled.h3`
  margin-bottom: 54px;

  font-weight: ${({ theme }) => theme.fontWeights[2]};
  font-size: ${({ theme }) => theme.fontSizes[8]}px;
`
export const InputBox = styled.div`
  margin-left: 7px;
`

export const InputLabel = styled.h4`
  margin-bottom: 12px;
  margin-left: 3px;

  font-weight: ${({ theme }) => theme.fontWeights[3]};
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
`
