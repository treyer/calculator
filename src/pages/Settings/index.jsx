import React from 'react'

import { PageLayout } from '@/layouts/PageLayout'
import {
  Card,
  Heading,
  InputBox,
  InputLabel,
  SettingsBox,
} from './components'
import Flex from '@/components/Flex/Flex'
import { ThemeSelect } from '@/components/ThemeSelect'
import { ResetButton } from '@/components/ResetButton'

export default () => {
  return (
    <PageLayout>
      <Card>
        <SettingsBox>
          <Flex
            direction="column"
            justify="start"
            align="start">
            <Heading>Settings</Heading>
            <InputBox>
              <InputLabel>Switch theme</InputLabel>
              <ThemeSelect />
              <ResetButton />
            </InputBox>
          </Flex>
        </SettingsBox>
      </Card>
    </PageLayout>
  )
}
