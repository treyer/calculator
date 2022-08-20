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
import { convertInputToString } from '@/helpers/convertInputToString'
import {
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

  render() {
    return (
      <HistoryWrapper data-cy="history">
        <Heading>History</Heading>
        <ContentBox data-cy="history-content-box">
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
                    item,
                    index,
                  )
                }>
                {convertInputToString(item)}
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

HistoryClass.propTypes = {
  operationsHistory: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.object),
  ).isRequired,
}

const mapStateToProps = state => ({
  expressionType: state.settings.expressionType,
})

const mapDispatchToProps = () => ({
  updateUserInput,
  removeHistoryItem,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(HistoryClass)
