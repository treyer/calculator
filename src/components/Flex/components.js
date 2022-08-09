import styled from 'styled-components'

export const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  height: 100%;
`
