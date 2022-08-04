import React from 'react'

import Flex from '@/components/Flex'
import { NavigationLink } from './components'

export const Menu = () => {
  return (
    <nav>
      <Flex>
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="/settings">
          Settings
        </NavigationLink>
      </Flex>
    </nav>
  )
}
