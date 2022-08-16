import React from 'react'

import { ErrorBoundary } from '@/components/ErrorBoundary'
import { Calculator } from '@/components/Calculator'
import { Card } from './components'

import { PageLayout } from '@/layouts/PageLayout'

export default () => {
  return (
    <PageLayout>
      <Card>
        <ErrorBoundary>
          <Calculator />
        </ErrorBoundary>
      </Card>
    </PageLayout>
  )
}
