import React from 'react'
import { useSelector } from 'react-redux'

import Application from '@/App'
import { PreHeader } from '@/components/PreHeader'
import { Header } from '@/components/Header'
import { LayoutWrapper } from './components'

export const MainLayout = () => {
  const { appType } = useSelector(state => state.settings)

  return (
    <LayoutWrapper>
      <PreHeader />
      <Header />
      {appType === 'functional' && <Application />}
      {appType === 'class' && <div>Class</div>}
    </LayoutWrapper>
  )
}
