import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import Application from '@/App'
import { PreHeader } from '@/components/PreHeader'
import { Header } from '@/components/Header'
import { LayoutWrapper } from './components'

import GlobalStyles from '@/globalStyles'
import theme from '@/theme'
import themeDark from '@/themeDark'

export const MainLayout = () => {
  const { theme: appTheme, appType } = useSelector(
    state => state.settings,
  )

  return (
    <ThemeProvider
      theme={appTheme === 'light' ? theme : themeDark}>
      <LayoutWrapper>
        <GlobalStyles />
        <PreHeader />
        <Header />
        {appType === 'functional' && <Application />}
        {appType === 'class' && <div>Class</div>}
      </LayoutWrapper>
    </ThemeProvider>
  )
}
