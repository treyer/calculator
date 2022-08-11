import React from 'react'
import FlexClass from '@/components/Flex/FlexClass'
import { Button } from './components'

export class ResetButtonClass extends React.Component {
  render() {
    return (
      <Button>
        <FlexClass> Clear All History</FlexClass>
      </Button>
    )
  }
}
