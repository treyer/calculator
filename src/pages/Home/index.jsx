import React from 'react'

import { Calculator } from '@/components/Calculator'
import { Card } from './components'

import { PageLayout } from '@/layouts/PageLayout'

export default () => {
  return (
    <PageLayout>
      <Card>
        <Calculator />
      </Card>
    </PageLayout>
  )
}
