import React from 'react'

import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import {
  PreHeader,
  PreHeaderClass,
} from '@components/PreHeader'
import { Header, HeaderClass } from '@components/Header'
import {
  Application,
  ApplicationClass,
} from '@components/App'
import { LayoutWrapper } from './components'

import theme from '@/theme'
import themeDark from '@/themeDark'

export const MainLayout = () => {
  const { theme: appTheme, appType } = useSelector(
    state => state.settings,
  )

  return (
    <ThemeProvider
      theme={appTheme === 'light' ? theme : themeDark}>
      {appType === 'functional' && (
        <LayoutWrapper>
          <PreHeader />
          <Header />
          <Application />
        </LayoutWrapper>
      )}
      {appType === 'class' && (
        <LayoutWrapper>
          <PreHeaderClass />
          <HeaderClass />
          <ApplicationClass />
        </LayoutWrapper>
      )}
    </ThemeProvider>
  )
}
