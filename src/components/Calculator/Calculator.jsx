import React from 'react'

import Flex from '@/components/Flex'
import { Display } from '@/components/Display'
import { Keypad } from '@/components/Keypad'
import { History } from '@/components/History'
import { ControlPanel } from '../ControlPanel'

export const Calculator = () => {
  return (
    <Flex direction="column">
      <ControlPanel />
      <Flex>
        <Flex direction="column">
          <Display />
          <Keypad />
        </Flex>
        <History />
      </Flex>
    </Flex>
  )
}
