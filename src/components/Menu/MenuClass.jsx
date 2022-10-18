import React from 'react'

import FlexClass from '@wrappers/Flex/FlexClass'
import { NavigationLink } from './components'

import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '@constants'

export class MenuClass extends React.Component {
  render() {
    return (
      <nav data-cy="header-nav-class">
        <FlexClass>
          <NavigationLink
            exact
            to={HOME_PAGE_ROUTE}
            data-cy="button-home-class">
            Home
          </NavigationLink>
          <NavigationLink
            exact
            to={SETTINGS_PAGE_ROUTE}
            data-cy="button-settings-class">
            Settings
          </NavigationLink>
        </FlexClass>
      </nav>
    )
  }
}
