import React from 'react'

import { ErrorBoundary } from '@components/ErrorBoundary'
import { Calculator } from '@components/Calculator'
import { Card, Main } from './components'

import { PageLayout } from '@layouts/PageLayout'

export default () => {
  return (
    <Main>
      <PageLayout>
        <Card>
          <ErrorBoundary>
            <Calculator />
          </ErrorBoundary>
        </Card>
      </PageLayout>
    </Main>
  )
}
