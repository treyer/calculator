import React from 'react'

import { ErrorBoundary } from '@/components/ErrorBoundary'
import { PageLayout } from '@/layouts/PageLayout'
import {
  Card,
  Heading,
  InputBox,
  InputLabel,
  Main,
  SettingsBox,
} from './components'
import Flex from '@/components/Flex/Flex'
import { ThemeSelect } from '@/components/ThemeSelect'
import { ResetButton } from '@/components/ResetButton'

export default () => {
  return (
    <Main>
      <PageLayout>
        <Card>
          <ErrorBoundary>
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
          </ErrorBoundary>
        </Card>
      </PageLayout>
    </Main>
  )
}
