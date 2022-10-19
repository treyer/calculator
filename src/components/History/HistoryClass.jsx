import React from 'react'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import ResetHistoryButtonClass from '@controls/ResetHistoryButton/ResetHistoryButtonClass'
import HistoryBlockButtonClass from '@controls/HistoryBlockButton/HistoryBlockButtonClass'
import {
  ContentBox,
  Heading,
  HistoryWrapper,
  ExpressionHistory,
  RemoveBtn,
} from './components'
import { convertInputToString } from '@utils'
import {
  clearExpression,
  clearHistory,
  removeHistoryItem,
  updateUserInput,
} from '@store/actions/data'
import { EXPRESSION_TYPE_COMPLEX } from '@/constants'

class HistoryClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isError: false,
      isShown: true,
    }
    this.errorItemIndex = -1
    this.handleSetHistoryExprAsCurrent = this.handleSetHistoryExprAsCurrent.bind(
      this,
    )
    this.handleRemoveHistoryExpr = this.handleRemoveHistoryExpr.bind(
      this,
    )
    this.handleResetHistory = this.handleResetHistory.bind(
      this,
    )
    this.handleShowComponent = this.handleShowComponent.bind(
      this,
    )
  }

  componentDidUpdate() {
    if (this.state.isError === true) {
      this.timerHandle = setTimeout(() => {
        this.errorItemIndex = -1
        this.setState({ isError: false })
        this.timerHandle = null
      }, 200)
    }
  }

  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle)
      this.timerHandle = null
    }
  }

  handleSetHistoryExprAsCurrent = (
    userInput,
    index,
  ) => () => {
    if (
      this.props.expressionType === EXPRESSION_TYPE_COMPLEX
    ) {
      this.props.updateUserInput(userInput)
      this.props.clearExpression()
    } else {
      const isBrackets = userInput.some(
        el => Object.keys(el)[0] === 'bracket',
      )
      if (!isBrackets) {
        this.props.updateUserInput(userInput)
        this.props.clearExpression()
      } else {
        this.errorItemIndex = index
        this.setState({ isError: true })
      }
    }
  }

  handleRemoveHistoryExpr = event => {
    event.stopPropagation()
    const { index } = event.target.dataset
    this.props.removeHistoryItem(index)
  }

  handleResetHistory = () => {
    if (this.props.operationsHistory.length > 0) {
      this.props.clearHistory()
    }
  }

  handleShowComponent = () => {
    this.setState({ isShown: !this.state.isShown })
  }

  render() {
    return (
      <HistoryWrapper
        data-cy="history-class"
        isShown={this.state.isShown}>
        <HistoryBlockButtonClass
          isShown={this.state.isShown}
          // eslint-disable-next-line react/jsx-handler-names
          handleClick={this.handleShowComponent}
        />
        <Heading isShown={this.state.isShown}>
          History{' '}
          <ResetHistoryButtonClass
            // eslint-disable-next-line react/jsx-handler-names
            handleResetCallback={this.handleResetHistory}
          />
        </Heading>
        <ContentBox
          data-cy="history-content-box-class"
          isShown={this.state.isShown}>
          {this.props.operationsHistory.map(item => (
            <ExpressionHistory
              key={item.id}
              className={
                this.state.isError &&
                this.errorItemIndex === item.id &&
                'error'
              }
              onClick={this.handleSetHistoryExprAsCurrent(
                item.expression,
                item.id,
              )}>
              {`${convertInputToString(item.expression)}= ${
                item.result
              }`}
              <RemoveBtn
                data-index={item.id}
                onClick={this.handleRemoveHistoryExpr}>
                ✖
              </RemoveBtn>
            </ExpressionHistory>
          ))}
        </ContentBox>
      </HistoryWrapper>
    )
  }
}

HistoryClass.propTypes = {
  operationsHistory: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      expression: PropTypes.array,
      result: PropTypes.string,
    }),
  ).isRequired,
}

const mapStateToProps = state => ({
  expressionType: state.settings.expressionType,
})

const mapDispatchToProps = () => ({
  clearExpression,
  clearHistory,
  updateUserInput,
  removeHistoryItem,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(HistoryClass)
