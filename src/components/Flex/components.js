import styled from 'styled-components'

export const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props =>
    props.justify || 'space-between'};
  align-items: ${props => props.align || 'center'};
`
