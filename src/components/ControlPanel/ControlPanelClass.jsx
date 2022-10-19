import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import FlexClass from '@wrappers/Flex/FlexClass'
import SwitchPanelClass from '@controls/SwitchPanel/SwitchPanelClass'
import { PanelWrapper } from './components'

import {
  changeCalculatorType,
  changeExpressionType,
} from '@store/actions/settings'
import {
  EXPRESSION_TYPE_COMPLEX,
  CALCULATOR_TYPE_ADVANCED,
} from '@constants'

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
    if (
      this.props.expressionType === EXPRESSION_TYPE_COMPLEX
    )
      this.props.clearAll()
    this.props.changeExpressionType()
  }

  ChangeCalculatorType = () => {
    if (
      this.props.calculatorType === CALCULATOR_TYPE_ADVANCED
    )
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
              this.props.calculatorType ===
              CALCULATOR_TYPE_ADVANCED
            }
            callback={this.ChangeCalculatorType}
          />
          <SwitchPanelClass
            label="Expressions mode:"
            textBefore="simple"
            textAfter="complex"
            isChecked={
              this.props.expressionType ===
              EXPRESSION_TYPE_COMPLEX
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
