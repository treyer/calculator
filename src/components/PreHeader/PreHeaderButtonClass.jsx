import React from 'react'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import FlexClass from '@wrappers/Flex/FlexClass'
import { ButtonText, PreHeaderBtn } from './components'

import { changeComponentsType } from '@store/actions/settings'
import {
  APP_TYPE_CLASS,
  APP_TYPE_FUNCTIONAL,
} from '@constants'

class PreHeaderButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleAppTypeChange = this.handleAppTypeChange.bind(
      this,
    )
  }

  handleAppTypeChange = () => {
    if (this.props.btnType !== this.props.appType) {
      this.props.changeComponentsType()
    }
  }

  render() {
    return (
      <PreHeaderBtn
        className={
          this.props.appType === this.props.btnType &&
          'active'
        }
        onClick={this.handleAppTypeChange}>
        <FlexClass justify="center">
          <ButtonText>{this.props.children}</ButtonText>
        </FlexClass>
      </PreHeaderBtn>
    )
  }
}

PreHeaderButton.propTypes = {
  children: PropTypes.string.isRequired,
  btnType: PropTypes.oneOf([
    APP_TYPE_FUNCTIONAL,
    APP_TYPE_CLASS,
  ]),
}

const mapStateToProps = state => ({
  appType: state.settings.appType,
})

const mapDispatchToProps = () => ({
  changeComponentsType,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(PreHeaderButton)
