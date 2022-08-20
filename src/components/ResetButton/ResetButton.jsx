import React from 'react'
import { useDispatch } from 'react-redux'

import Flex from '@components/Flex/Flex'
import { Button } from './components'

import {
  clearHistory,
  updateUserInput,
} from '@store/actions/data'

export const ResetButton = () => {
  const dispatch = useDispatch()

  const handleClearHistory = () => {
    dispatch(clearHistory())
    dispatch(updateUserInput([{ number: '0' }]))
  }

  return (
    <Button
      onClick={handleClearHistory}
      data-cy="clear-history-button">
      <Flex> Clear All History</Flex>
    </Button>
  )
}
