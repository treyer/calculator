import React from 'react'
import PropTypes from 'prop-types'

import { Input, Label, Slider } from './components'

class SwitcherClass extends React.Component {
  render() {
    return (
      <Label>
        <Input
          checked={this.props.isChecked}
          onChange={this.props.handleChange}
        />
        <Slider className="slider" />
      </Label>
    )
  }
}

SwitcherClass.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func,
}

export default SwitcherClass
