import React from 'react'

import Flex from '@/components/Flex'
import Logo from '@/components/Logo'
import { Menu } from '@/components/Menu'
import { HeaderWrapper, HeaderInner } from './components'

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <Flex>
          <Logo>Calculator App</Logo>
          <Menu />
        </Flex>
      </HeaderInner>
    </HeaderWrapper>
  )
}
