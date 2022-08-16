import React from 'react'

import KeyClass from '@/components/Key/KeyClass'
import FlexClass from '@/components/Flex/FlexClass'
import { Grid } from './components'

import { KEYS } from '@/constants'

export class KeypadClass extends React.Component {
  render() {
    return (
      <Grid>
        {KEYS.map(key => (
          <FlexClass key={key.id} justify="end">
            <KeyClass title={key.keyName}>
              {key.key}
            </KeyClass>
          </FlexClass>
        ))}
      </Grid>
    )
  }
}
