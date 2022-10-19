import styled from 'styled-components'
import BaseLoader from 'react-loader-spinner'

export const Loader = styled(BaseLoader)`
  position: fixed;
  top: calc(
    50% - ${({ theme }) => theme.additionalSpaces[5]}px
  );
  left: calc(
    50% - ${({ theme }) => theme.additionalSpaces[5]}px
  );
`
