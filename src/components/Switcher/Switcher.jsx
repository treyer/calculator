import React from 'react'
import PropTypes from 'prop-types'

import { Input, Label, Slider } from './components'

function Switcher({ isChecked, callback }) {
  return (
    <Label>
      <Input checked={isChecked} onChange={callback} />
      <Slider className="slider" />
    </Label>
  )
}

Switcher.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  callback: PropTypes.func,
}

export default Switcher
