import React from 'react'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import FlexClass from '@components/Flex/FlexClass'
import SwitchPanelClass from '@components/SwitchPanel/SwitchPanelClass'

import {
  changeCalculatorType,
  changeExpressionType,
} from '@store/actions/settings'
import { PanelWrapper } from './components'

class ControlPanelClass extends React.Component {
  constructor(props) {
    super(props)
    this.ChangeExpressionType = this.ChangeExpressionType.bind(
      this,
    )
    this.ChangeCalculatorType = this.ChangeCalculatorType.bind(
      this,
    )
  }

  ChangeExpressionType = () => {
    if (this.props.expressionType === 'complex')
      this.props.clearAll()
    this.props.changeExpressionType()
  }

  ChangeCalculatorType = () => {
    if (this.props.calculatorType === 'advanced')
      this.props.clearAll()
    this.props.changeCalculatorType()
  }

  render() {
    return (
      <PanelWrapper data-cy="control-panel-class">
        <FlexClass justify="start">
          <SwitchPanelClass
            label="Calculator type:"
            textBefore="basic"
            textAfter="advanced"
            isChecked={
              this.props.calculatorType === 'advanced'
            }
            callback={this.ChangeCalculatorType}
          />
          <SwitchPanelClass
            label="Expressions mode:"
            textBefore="simple"
            textAfter="complex"
            isChecked={
              this.props.expressionType === 'complex'
            }
            callback={this.ChangeExpressionType}
          />
        </FlexClass>
      </PanelWrapper>
    )
  }
}

ControlPanelClass.propTypes = {
  clearAll: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  expressionType: state.settings.expressionType,
  calculatorType: state.settings.calculatorType,
})

const mapDispatchToProps = () => ({
  changeExpressionType,
  changeCalculatorType,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(ControlPanelClass)
