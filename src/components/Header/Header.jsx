import React from 'react'

import Flex from '@wrappers/Flex/Flex'
import Logo from '@components/Logo/Logo'
import { Menu } from '@components/Menu'
import { HeaderWrapper, HeaderInner } from './components'

export const Header = () => {
  return (
    <HeaderWrapper data-cy="header">
      <HeaderInner>
        <Flex>
          <Logo>Calculator App</Logo>
          <Menu />
        </Flex>
      </HeaderInner>
    </HeaderWrapper>
  )
}
