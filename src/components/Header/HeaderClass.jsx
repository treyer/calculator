import React from 'react'

import FlexClass from '@components/Flex/FlexClass'
import LogoClass from '@components/Logo/LogoClass'
import { MenuClass } from '@components/Menu'
import { HeaderWrapper, HeaderInner } from './components'

export class HeaderClass extends React.Component {
  render() {
    return (
      <HeaderWrapper data-cy="header-class">
        <HeaderInner>
          <FlexClass>
            <LogoClass>Calculator App</LogoClass>
            <MenuClass />
          </FlexClass>
        </HeaderInner>
      </HeaderWrapper>
    )
  }
}
