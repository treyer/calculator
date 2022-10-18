import React from 'react'
import PropTypes from 'prop-types'

import { Button } from './components'

function HistoryBlockButton({ isShown, handleClick }) {
  return <Button isShown={isShown} onClick={handleClick} />
}

HistoryBlockButton.propTypes = {
  isShown: PropTypes.bool,
  handleClick: PropTypes.func,
}

export default HistoryBlockButton
