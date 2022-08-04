import React from 'react'

import { PageLayout } from '@/layouts/PageLayout'
import Loader from '@/components/Loader'

import { Card, Heading } from './components'

export default () => {
  return (
    <PageLayout>
      <Card>
        <Heading id="welcome">Welcome!</Heading>
        <Loader />
      </Card>
    </PageLayout>
  )
}
