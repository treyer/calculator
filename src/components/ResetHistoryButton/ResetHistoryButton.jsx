import React from 'react'
import PropTypes from 'prop-types'

import Flex from '../Flex/Flex'
import { Button } from './components'

function ResetHistoryButton({ handleResetCallback }) {
  return (
    <Button
      onClick={handleResetCallback}
      data-cy="clear-history-block-button">
      <Flex>Clear</Flex>
    </Button>
  )
}

ResetHistoryButton.propTypes = {
  handleResetCallback: PropTypes.func,
}

export default ResetHistoryButton
