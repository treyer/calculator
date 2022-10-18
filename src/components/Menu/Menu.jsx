import React from 'react'

import Flex from '@wrappers/Flex/Flex'
import { NavigationLink } from './components'

import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '@constants'

export const Menu = () => {
  return (
    <nav data-cy="header-nav">
      <Flex>
        <NavigationLink
          exact
          to={HOME_PAGE_ROUTE}
          data-cy="button-home">
          Home
        </NavigationLink>
        <NavigationLink
          exact
          to={SETTINGS_PAGE_ROUTE}
          data-cy="button-settings">
          Settings
        </NavigationLink>
      </Flex>
    </nav>
  )
}
