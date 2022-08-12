import React from 'react'
import { connect } from 'react-redux'

import FlexClass from '@/components/Flex/FlexClass'
import SwitchPanelClass from '@/components/SwitchPanel/SwitchPanelClass'

import {
  changeCalculatorType,
  changeExpressionType,
} from '@/store/actions/settings'
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
    this.props.changeExpressionType()
  }

  ChangeCalculatorType = () => {
    this.props.changeCalculatorType()
  }

  render() {
    return (
      <PanelWrapper>
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
            label="Expressions type:"
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
