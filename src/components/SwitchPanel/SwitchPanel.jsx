import React from 'react'
import PropTypes from 'prop-types'

import Switcher from '@/components/Switcher/Switcher'
import Flex from '@/components/Flex/Flex'
import {
  PanelLabel,
  PanelText,
  PanelWrapper,
} from './components'

function SwitchPanel({
  label,
  textBefore,
  textAfter,
  isChecked,
  callback,
}) {
  return (
    <PanelWrapper>
      <PanelLabel>{label}</PanelLabel>
      <Flex>
        <PanelText className={!isChecked && 'active'}>
          <Flex justify="end">{textBefore}</Flex>
        </PanelText>
        <Switcher
          isChecked={isChecked}
          callback={callback}
        />
        <PanelText className={isChecked && 'active'}>
          <Flex justify="start">{textAfter}</Flex>
        </PanelText>
      </Flex>
    </PanelWrapper>
  )
}

SwitchPanel.propTypes = {
  label: PropTypes.string.isRequired,
  textBefore: PropTypes.string.isRequired,
  textAfter: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired,
}

export default SwitchPanel
