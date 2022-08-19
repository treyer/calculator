import React from 'react'

import { connect } from 'react-redux'

import FlexClass from '@/components/Flex/FlexClass'
import DisplayClass from '@components/Display/DisplayClass'
import KeypadClass from '@components/Keypad/KeypadClass'
import HistoryClass from '@components/History/HistoryClass'
import ControlPanelClass from '@components/ControlPanel/ControlPanelClass'
import {
  CalculatorInner,
  CalculatorMain,
  CalculatorWrapper,
  KeypadWrapper,
} from './components'

import {
  addHistoryItem,
  updateUserInput,
} from '@store/actions/data'
import {
  brackets,
  numberConstants,
  operators,
} from '@constants'
import { convertInputToString } from '@/helpers/convertInputToString'
import {
  handleAddBracket,
  handleAddConstant,
  handleAddDigit,
  handleAddDot,
  handleAddOperator,
  handleChangeSign,
  handleClearAll,
  handleClearEntry,
  isInputComplete,
} from '@/helpers/handleKeysInput'
import { calculateExpression } from '@/helpers/handleCalculation'

class CalculatorClass extends React.Component {
  constructor(props) {
    super(props)
    this.updateInput = this.updateInput.bind(this)
    this.addExpressionToHistory = this.addExpressionToHistory.bind(
      this,
    )
  }

  updateInput = newInput => {
    this.props.updateUserInput(newInput)
  }

  addExpressionToHistory = expr => {
    this.props.addHistoryItem(expr)
  }

  operations = {
    addDigit: (digit, setIsError) => {
      const res = handleAddDigit(
        digit,
        this.props.userInput,
      )
      res ? this.updateInput(res) : setIsError()
    },
    addConstant: (constantType, setIsError) => {
      const res = handleAddConstant(
        numberConstants[constantType],
        this.props.userInput,
      )
      res ? this.updateInput(res) : setIsError()
    },
    addDot: (payload, setIsError) => {
      const res = handleAddDot(this.props.userInput)
      res ? this.updateInput(res) : setIsError()
    },
    addOperator: (operator, setIsError) => {
      if (
        this.props.expressionType === 'simple' &&
        this.props.userInput.length === 3
      ) {
        if (isInputComplete(this.props.userInput)) {
          try {
            const { res, expression } = calculateExpression(
              this.props.userInput,
            )
            this.updateInput([
              { number: String(res) },
              { operator: operators[operator] },
            ])
            this.addExpressionToHistory(expression)
          } catch (err) {
            this.updateInput([{ error: err.message }])
          }
        } else {
          setIsError()
        }
      } else {
        const res = handleAddOperator(
          operators[operator],
          this.props.userInput,
        )
        res ? this.updateInput(res) : setIsError()
      }
    },
    addBracket: (bracket, setIsError) => {
      if (this.props.expressionType === 'complex') {
        const res = handleAddBracket(
          brackets[bracket],
          this.props.userInput,
        )
        res ? this.updateInput(res) : setIsError()
      } else {
        setIsError()
      }
    },
    changeSign: (payload, setIsError) => {
      const res = handleChangeSign(this.props.userInput)
      res ? this.updateInput(res) : setIsError()
    },
    clearAll: () => {
      const res = handleClearAll(this.props.userInput)
      if (res) this.updateInput(res)
    },
    clearEntry: () => {
      const res = handleClearEntry(this.props.userInput)
      if (res) this.updateInput(res)
    },
    calculate: (payload, setIsError) => {
      if (isInputComplete(this.props.userInput)) {
        try {
          const { res, expression } = calculateExpression(
            this.props.userInput,
          )
          this.updateInput([{ number: String(res) }])
          this.addExpressionToHistory(expression)
        } catch (err) {
          this.updateInput([{ error: err.message }])
        }
      } else {
        setIsError()
      }
    },
  }

  render() {
    return (
      <CalculatorWrapper>
        <FlexClass direction="column" justify="start">
          <ControlPanelClass
            clearAll={this.operations.clearAll}
          />
          <CalculatorInner>
            <FlexClass align="start">
              <CalculatorMain>
                <FlexClass
                  direction="column"
                  justify="start">
                  <DisplayClass
                    output={convertInputToString(
                      this.props.userInput,
                    )}
                  />
                  <KeypadWrapper>
                    <KeypadClass
                      operations={this.operations}
                    />
                  </KeypadWrapper>
                </FlexClass>
              </CalculatorMain>
              <HistoryClass
                operationsHistory={this.props.historyArr}
              />
            </FlexClass>
          </CalculatorInner>
        </FlexClass>
      </CalculatorWrapper>
    )
  }
}

const mapStateToProps = state => ({
  userInput: state.data.userInput,
  historyArr: state.data.historyArr,
  expressionType: state.settings.expressionType,
})

const mapDispatchToProps = () => ({
  addHistoryItem,
  updateUserInput,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(CalculatorClass)
