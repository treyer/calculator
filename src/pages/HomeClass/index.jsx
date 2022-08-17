import React from 'react'

import { ErrorBoundary } from '@/components/ErrorBoundary'
import CalculatorClass from '@/components/Calculator/CalculatorClass'
import { Card } from '@/pages/Home/components'

import { PageLayout } from '@/layouts/PageLayout'

export default class HomeClass extends React.Component {
  render() {
    return (
      <PageLayout>
        <Card>
          <ErrorBoundary>
            <CalculatorClass />
          </ErrorBoundary>
        </Card>
      </PageLayout>
    )
  }
}
