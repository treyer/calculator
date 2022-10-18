import React from 'react'

import { ErrorBoundary } from '@components/ErrorBoundary'
import { PageLayout } from '@layouts/PageLayout'
import {
  Card,
  Heading,
  InputBox,
  InputLabel,
  Main,
  SettingsBox,
} from '@pages/Settings/components'
import FlexClass from '@wrappers/Flex/FlexClass'
import ThemeSelectClass from '@controls/ThemeSelect/ThemeSelectClass'
import ResetButtonClass from '@controls/ResetButton/ResetButtonClass'

export default class SettingsClass extends React.Component {
  render() {
    return (
      <Main>
        <PageLayout>
          <Card>
            <ErrorBoundary>
              <SettingsBox>
                <FlexClass
                  direction="column"
                  justify="start"
                  align="start">
                  <Heading>Settings</Heading>
                  <InputBox>
                    <InputLabel>Switch theme</InputLabel>
                    <ThemeSelectClass />
                    <ResetButtonClass />
                  </InputBox>
                </FlexClass>
              </SettingsBox>
            </ErrorBoundary>
          </Card>
        </PageLayout>
      </Main>
    )
  }
}
