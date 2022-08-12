import React from 'react'

import { PageLayout } from '@/layouts/PageLayout'
import {
  Card,
  Heading,
  InputBox,
  InputLabel,
  SettingsBox,
} from '@/pages/Settings/components'
import FlexClass from '@/components/Flex/FlexClass'
import ThemeSelectClass from '@/components/ThemeSelect/ThemeSelectClass'
import { ResetButtonClass } from '@/components/ResetButton'

export default class SettingsClass extends React.Component {
  render() {
    return (
      <PageLayout>
        <Card>
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
        </Card>
      </PageLayout>
    )
  }
}