import React from 'react'

import Key from '@/components/Key/Key'
import Flex from '@/components/Flex'
import { Grid } from './components'

import { KEYS } from '@/constants/keys'

export const Keypad = () => {
  return (
    <Grid>
      {KEYS.map(key => (
        <Flex key={key.id} justify="end">
          <Key title={key.keyName}>{key.key}</Key>
        </Flex>
      ))}
    </Grid>
  )
}
