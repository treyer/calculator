import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import KeyClass from '@components/Key/KeyClass'
import FlexClass from '@wrappers/Flex/FlexClass'
import { Grid } from './components'

import {
  CALCULATOR_TYPE_BASIC,
  KEYS,
  KEYS_ADVANCED,
  CALCULATOR_TYPE_ADVANCED,
} from '@constants'

class KeypadClass extends React.Component {
  constructor(props) {
    super(props)
    this.execute = this.execute.bind(this)
  }

  execute = action => {
    this.props.operations[action.type](
      action.payload,
      action.callback,
    )
  }

  render() {
    return (
      <Grid
        data-cy="keypad-class"
        className={
          this.props.calculatorType ===
            CALCULATOR_TYPE_ADVANCED && 'advanced'
        }>
        {this.props.calculatorType ===
          CALCULATOR_TYPE_BASIC &&
          KEYS.map(key => (
            <FlexClass key={key.id} justify="center">
              <KeyClass
                title={key.keyName}
                type={key.type}
                payload={key.payload}
                execute={this.execute}>
                {key.key}
              </KeyClass>
            </FlexClass>
          ))}
        {this.props.calculatorType ===
          CALCULATOR_TYPE_ADVANCED &&
          KEYS_ADVANCED.map(key => (
            <FlexClass key={key.id} justify="center">
              <KeyClass
                title={key.keyName}
                type={key.type}
                payload={key.payload}
                execute={this.execute}>
                {key.key}
              </KeyClass>
            </FlexClass>
          ))}
      </Grid>
    )
  }
}

KeypadClass.propTypes = {
  operations: PropTypes.shape({
    addDigit: PropTypes.func.isRequired,
    addConstant: PropTypes.func.isRequired,
    addDot: PropTypes.func.isRequired,
    addOperator: PropTypes.func.isRequired,
    addBracket: PropTypes.func.isRequired,
    changeSign: PropTypes.func.isRequired,
    clearAll: PropTypes.func.isRequired,
    clearEntry: PropTypes.func.isRequired,
    calculate: PropTypes.func.isRequired,
  }),
}

const mapStateToProps = state => ({
  calculatorType: state.settings.calculatorType,
})

export default connect(
  mapStateToProps,
  null,
)(KeypadClass)
