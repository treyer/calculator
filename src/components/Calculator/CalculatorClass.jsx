import React from 'react'

import { connect } from 'react-redux'

import FlexClass from '@wrappers/Flex/FlexClass'
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
  clearExpression,
  setExpression,
  updateUserInput,
} from '@store/actions/data'
import {
  brackets,
  numberConstants,
  operators,
} from '@constants'
import {
  calculateExpression,
  convertInputToString,
  isInputComplete,
  handleAddBracket,
  handleAddConstant,
  handleAddDigit,
  handleAddDot,
  handleAddOperator,
  handleChangeSign,
  handleClearAll,
  handleClearEntry,
} from '@utils'

class CalculatorClass extends React.Component {
  constructor(props) {
    super(props)
    this.updateInput = this.updateInput.bind(this)
    this.addExpressionToHistory = this.addExpressionToHistory.bind(
      this,
    )
    this.clearCalcExpression = this.clearCalcExpression.bind(
      this,
    )
    this.setCalcExpression = this.setCalcExpression.bind(
      this,
    )
  }

  updateInput = newInput => {
    this.props.updateUserInput(newInput)
  }

  addExpressionToHistory = (expr, res) => {
    this.props.addHistoryItem({
      expression: expr,
      result: res,
    })
  }

  clearCalcExpression = () => {
    if (this.props.expression.length !== 0) {
      this.props.clearExpression()
    }
  }

  setCalcExpression = expr => {
    this.props.setExpression(expr)
  }

  operations = {
    addDigit: (digit, setIsError) => {
      const res = handleAddDigit(
        digit,
        this.props.userInput,
      )
      res ? this.updateInput(res) : setIsError()
      if (res) this.clearCalcExpression()
    },
    addConstant: (constantType, setIsError) => {
      const res = handleAddConstant(
        numberConstants[constantType],
        this.props.userInput,
      )
      res ? this.updateInput(res) : setIsError()
      if (res) this.clearCalcExpression()
    },
    addDot: (payload, setIsError) => {
      const res = handleAddDot(this.props.userInput)
      res ? this.updateInput(res) : setIsError()
      if (res) this.clearCalcExpression()
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
            this.addExpressionToHistory(expression, res)
            this.setCalcExpression(
              `${convertInputToString(expression)} =`,
            )
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
        if (res) this.clearCalcExpression()
      }
    },
    addBracket: (bracket, setIsError) => {
      if (this.props.expressionType === 'complex') {
        const res = handleAddBracket(
          brackets[bracket],
          this.props.userInput,
        )
        res ? this.updateInput(res) : setIsError()
        if (res) this.clearCalcExpression()
      } else {
        setIsError()
      }
    },
    changeSign: (payload, setIsError) => {
      const res = handleChangeSign(this.props.userInput)
      res ? this.updateInput(res) : setIsError()
      if (res) this.clearCalcExpression()
    },
    clearAll: () => {
      const res = handleClearAll(this.props.userInput)
      if (res) this.updateInput(res)
      if (res) this.clearCalcExpression()
    },
    clearEntry: () => {
      const res = handleClearEntry(this.props.userInput)
      if (res) this.updateInput(res)
      if (res) this.clearCalcExpression()
    },
    calculate: (payload, setIsError) => {
      if (isInputComplete(this.props.userInput)) {
        try {
          const { res, expression } = calculateExpression(
            this.props.userInput,
          )
          this.updateInput([{ number: String(res) }])
          this.addExpressionToHistory(expression, res)
          this.setCalcExpression(
            `${convertInputToString(expression)} =`,
          )
        } catch (err) {
          this.updateInput([{ error: err.message }])
          this.clearCalcExpression()
        }
      } else {
        setIsError()
      }
    },
  }

  render() {
    return (
      <CalculatorWrapper data-cy="calculator-class">
        <FlexClass direction="column" justify="start">
          <ControlPanelClass
            clearAll={this.operations.clearAll}
            data-cy="control-panel-class"
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
                    expression={this.props.expression}
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
  expression: state.data.expression,
  historyArr: state.data.historyArr,
  expressionType: state.settings.expressionType,
})

const mapDispatchToProps = () => ({
  addHistoryItem,
  clearExpression,
  setExpression,
  updateUserInput,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(CalculatorClass)
