import React from 'react'
import PropTypes from 'prop-types'

import SwitcherClass from '@controls/Switcher/SwitcherClass'
import FlexClass from '@wrappers/Flex/FlexClass'
import {
  PanelLabel,
  PanelText,
  PanelWrapper,
} from './components'

class SwitchPanelClass extends React.Component {
  render() {
    return (
      <PanelWrapper>
        <PanelLabel>{this.props.label}</PanelLabel>
        <FlexClass>
          <PanelText
            className={!this.props.isChecked && 'active'}>
            <FlexClass justify="end">
              {this.props.textBefore}
            </FlexClass>
          </PanelText>
          <SwitcherClass
            isChecked={this.props.isChecked}
            handleChange={this.props.callback}
          />
          <PanelText
            className={this.props.isChecked && 'active'}>
            <FlexClass justify="start">
              {this.props.textAfter}
            </FlexClass>
          </PanelText>
        </FlexClass>
      </PanelWrapper>
    )
  }
}

SwitchPanelClass.propTypes = {
  label: PropTypes.string.isRequired,
  textBefore: PropTypes.string.isRequired,
  textAfter: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired,
}

export default SwitchPanelClass
