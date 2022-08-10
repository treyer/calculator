import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import Application from '@/App'
import {
  PreHeader,
  PreHeaderClass,
} from '@/components/PreHeader'
import { Header, HeaderClass } from '@/components/Header'
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
          <div>Class</div>
        </LayoutWrapper>
      )}
    </ThemeProvider>
  )
}
