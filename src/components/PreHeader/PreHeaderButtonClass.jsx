import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import FlexClass from '@/components/Flex/FlexClass'
import { ButtonText, PreHeaderBtn } from './components'

import { changeComponentsType } from '@/store/actions/settings'
import { isPreHeaderBtnActive } from '@/helpers'

class PreHeaderButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleAppTypeChange = this.handleAppTypeChange.bind(
      this,
    )
  }

  handleAppTypeChange = newType => {
    if (newType !== this.props.appType) {
      this.props.changeComponentsType()
    }
  }

  render() {
    return (
      <PreHeaderBtn
        className={
          isPreHeaderBtnActive(
            this.props.appType,
            this.props.btnType,
          ) && 'active'
        }
        onClick={() =>
          this.handleAppTypeChange(this.props.btnType)
        }>
        <FlexClass justify="center">
          <ButtonText>{this.props.children}</ButtonText>
        </FlexClass>
      </PreHeaderBtn>
    )
  }
}

PreHeaderButton.propTypes = {
  children: PropTypes.string.isRequired,
  btnType: PropTypes.oneOf(['functional', 'class']),
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
