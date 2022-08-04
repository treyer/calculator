import React from 'react'

import Application from '@/App'
import { Header } from '@/components/Header'
import { LayoutWrapper } from './components'

export const MainLayout = () => {
  return (
    <LayoutWrapper>
      <Header />
      <Application />
    </LayoutWrapper>
  )
}
