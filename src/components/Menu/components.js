import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import theme from '@/theme'

export const NavigationLink = styled(NavLink)`
  position: relative;

  margin-left: ${({ theme }) =>
    theme.additionalSpaces[3]}px;

  font-size: ${({ theme }) => theme.fontSizes[5]}px;
  font-weight: ${theme.fontWeights[3]};
  text-decoration: none;

  color: ${theme.colors.fontColorSecondary};

  &:after {
    content: '';

    position: absolute;
    bottom: -7px;

    display: none;

    width: 100%;
    height: 3px;

    background-color: ${theme.colors.white};
  }

  &.active:after {
    display: block;
  }

  &:hover {
    opacity: 0.7;
  }
`
