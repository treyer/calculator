import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import {
  PreHeader,
  PreHeaderClass,
} from '@components/PreHeader'
import { Header, HeaderClass } from '@components/Header'
import { Application, ApplicationClass } from '@/App'
import { LayoutWrapper } from './components'

import theme from '@/theme'
import themeDark from '@/themeDark'
import {
  APP_TYPE_CLASS,
  APP_TYPE_FUNCTIONAL,
  THEME_LIGHT,
} from '@constants'

export const MainLayout = () => {
  const { theme: appTheme, appType } = useSelector(
    state => state.settings,
  )

  return (
    <ThemeProvider
      theme={appTheme === THEME_LIGHT ? theme : themeDark}>
      {appType === APP_TYPE_FUNCTIONAL && (
        <LayoutWrapper>
          <PreHeader />
          <Header />
          <Application />
        </LayoutWrapper>
      )}
      {appType === APP_TYPE_CLASS && (
        <LayoutWrapper>
          <PreHeaderClass />
          <HeaderClass />
          <ApplicationClass />
        </LayoutWrapper>
      )}
    </ThemeProvider>
  )
}
