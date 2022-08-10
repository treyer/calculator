import React from 'react'

import Flex from '@/components/Flex/Flex'
import { NavigationLink } from './components'

import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '@/constants'

export const Menu = () => {
  return (
    <nav>
      <Flex>
        <NavigationLink exact to={HOME_PAGE_ROUTE}>
          Home
        </NavigationLink>
        <NavigationLink exact to={SETTINGS_PAGE_ROUTE}>
          Settings
        </NavigationLink>
      </Flex>
    </nav>
  )
}
