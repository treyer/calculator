import React from 'react'

import { CalculatorClass } from '@/components/Calculator'
import { Card } from '@/pages/Home/components'

import { PageLayout } from '@/layouts/PageLayout'

export default class HomeClass extends React.Component {
  render() {
    return (
      <PageLayout>
        <Card>
          <CalculatorClass />
        </Card>
      </PageLayout>
    )
  }
}
