import React from 'react'

import { connect } from 'react-redux'

import FlexClass from '@wrappers/Flex/FlexClass'
import {
  OptionsWrapper,
  Select,
  SelectOption,
} from './components'

import { initializeChangeTheme } from '@store/actions/settings'
import { capitalizeFirstLetter } from '@utils'

class ThemeSelectClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOptionsOpen: false,
    }
    this.selectEl = React.createRef(null)

    this.handleThemeChange = this.handleThemeChange.bind(
      this,
    )
    this.handleSelectClick = this.handleSelectClick.bind(
      this,
    )
  }

  componentDidMount() {
    document.addEventListener(
      'mousedown',
      this.handleClickOutside,
    )
    document.addEventListener(
      'touchstart',
      this.handleClickOutside,
    )
  }

  componentWillUnmount() {
    document.removeEventListener(
      'mousedown',
      this.handleClickOutside,
    )
    document.removeEventListener(
      'touchstart',
      this.handleClickOutside,
    )
  }

  handleClickOutside = event => {
    if (
      !this.selectEl.current ||
      !this.selectEl.current.contains(event.target)
    ) {
      this.setState({ isOptionsOpen: false })
    }
  }

  handleThemeChange = () => {
    this.props.initializeChangeTheme()
  }

  handleSelectClick = () => {
    this.setState({
      isOptionsOpen: !this.state.isOptionsOpen,
    })
  }

  render() {
    return (
      <Select
        className={this.state.isOptionsOpen && 'opened'}
        ref={this.selectEl}
        onClick={this.handleSelectClick}
        data-cy="theme-select-class">
        <FlexClass>
          {`${capitalizeFirstLetter(
            this.props.theme,
          )} theme`}
        </FlexClass>
        {this.state.isOptionsOpen && (
          <OptionsWrapper>
            <SelectOption
              onClick={this.handleThemeChange}
              className={
                this.props.theme === 'light' && 'hidden'
              }
              data-cy="option-select-light-class">
              <FlexClass>Light theme</FlexClass>
            </SelectOption>
            <SelectOption
              onClick={this.handleThemeChange}
              className={
                this.props.theme === 'dark' && 'hidden'
              }
              data-cy="option-select-dark-class">
              <FlexClass>Dark theme</FlexClass>
            </SelectOption>
          </OptionsWrapper>
        )}
      </Select>
    )
  }
}

const mapStateToProps = state => ({
  theme: state.settings.theme,
})

const mapDispatchToProps = () => ({
  initializeChangeTheme,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps(),
)(ThemeSelectClass)
