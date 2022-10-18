import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import Loader from '@components/Loader'

import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
} from '@constants'

const HomePage = lazy(() => import('@pages/HomeClass'))
const SettingsPage = lazy(() =>
  import('@pages/SettingsClass'),
)

export class ApplicationClass extends React.Component {
  render() {
    return (
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route
            exact
            path={HOME_PAGE_ROUTE}
            component={HomePage}
          />
          <Route
            exact
            path={SETTINGS_PAGE_ROUTE}
            component={SettingsPage}
          />
        </Switch>
      </Suspense>
    )
  }
}
