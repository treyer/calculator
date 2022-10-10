import React from 'react'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
  ContentBox,
  Heading,
  HistoryWrapper,
  ExpressionHistory,
  RemoveBtn,
} from './components'
import ResetHistoryButtonClass from '../ResetHistoryButton/ResetHistoryButtonClass'
import { convertInputToString } from '@utils'
import {
  clearHistory,
  removeHistoryItem,
  updateUserInput,
} from '@store/actions/data'

class HistoryClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isError: false,
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
  }

  componentDidUpdate() {
    if (this.state.isError === true) {
      setTimeout(() => {
        this.errorItemIndex = -1
        this.setState({ isError: false })
      }, 200)
    }
  }

  handleSetHistoryExprAsCurrent = (userInput, index) => {
    if (this.props.expressionType === 'complex') {
      this.props.updateUserInput(userInput)
    } else {
      const isBrackets = userInput.some(
        el => Object.keys(el)[0] === 'bracket',
      )
      if (!isBrackets) {
        this.props.updateUserInput(userInput)
      } else {
        this.errorItemIndex = index
        this.setState({ isError: true })
      }
    }
  }

  handleRemoveHistoryExpr = (event, index) => {
    event.stopPropagation()
    this.props.removeHistoryItem(index)
  }

  handleResetHistory = () => {
    if (this.props.operationsHistory.length > 0) {
      this.props.clearHistory()
    }
  }

  render() {
    return (
      <HistoryWrapper data-cy="history-class">
        <Heading>
          History{' '}
          <ResetHistoryButtonClass
            // eslint-disable-next-line react/jsx-handler-names
            handleResetCallback={this.handleResetHistory}
          />
        </Heading>
        <ContentBox data-cy="history-content-box-class">
          {this.props.operationsHistory.map(
            (item, index) => (
              <ExpressionHistory
                key={index}
                className={
                  this.state.isError &&
                  this.errorItemIndex === index &&
                  'error'
                }
                onClick={() =>
                  this.handleSetHistoryExprAsCurrent(
                    item.expression,
                    index,
                  )
                }>
                {`${convertInputToString(
                  item.expression,
                )}= ${item.result}`}
                <RemoveBtn
                  onClick={event => {
                    this.handleRemoveHistoryExpr(
                      event,
                      index,
                    )
                  }}>
                  ✖
                </RemoveBtn>
              </ExpressionHistory>
            ),
          )}
        </ContentBox>
      </HistoryWrapper>
    )
  }
}

History.propTypes = {
  operationsHistory: PropTypes.arrayOf(
    PropTypes.shape({
      expression: PropTypes.array,
      result: PropTypes.string,
    }),
  ).isRequired,
}

const mapStateToProps = state => ({
  expressionType: state.settings.expressionType,
})

const mapDispatchToProps = () => ({
  clearHistory,
  updateUserInput,
  removeHistoryItem,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(HistoryClass)
