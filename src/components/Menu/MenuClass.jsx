import React from 'react'

import FlexClass from '@components/Flex/FlexClass'
import { NavigationLink } from './components'

import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '@constants'

export class MenuClass extends React.Component {
  render() {
    return (
      <nav>
        <FlexClass>
          <NavigationLink exact to={HOME_PAGE_ROUTE}>
            Home
          </NavigationLink>
          <NavigationLink exact to={SETTINGS_PAGE_ROUTE}>
            Settings
          </NavigationLink>
        </FlexClass>
      </nav>
    )
  }
}
