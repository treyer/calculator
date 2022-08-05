import React from 'react'

import Application from '@/App'
import { PreHeader } from '@/components/PreHeader'
import { Header } from '@/components/Header'
import { LayoutWrapper } from './components'

export const MainLayout = () => {
  return (
    <LayoutWrapper>
      <PreHeader />
      <Header />
      <Application />
    </LayoutWrapper>
  )
}
