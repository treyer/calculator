import React, { useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Flex from '@wrappers/Flex/Flex'
import {
  OptionsWrapper,
  Select,
  SelectOption,
} from './components'

import { initializeChangeTheme } from '@store/actions/settings'
import { capitalizeFirstLetter } from '@utils'
import { useClickOutside } from '@/hooks/useClickOutside'
import { THEME_DARK, THEME_LIGHT } from '@constants'

export const ThemeSelect = () => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false)
  const { theme } = useSelector(state => state.settings)
  const dispatch = useDispatch()
  const selectEl = useRef(null)
  useClickOutside(selectEl, () => setIsOptionsOpen(false))

  const handleThemeChange = () => {
    dispatch(initializeChangeTheme())
  }

  const handleSelectClick = () => {
    setIsOptionsOpen(prev => !prev)
  }

  return (
    <Select
      className={isOptionsOpen && 'opened'}
      ref={selectEl}
      onClick={handleSelectClick}
      data-cy="theme-select">
      <Flex>{`${capitalizeFirstLetter(theme)} theme`}</Flex>
      {isOptionsOpen && (
        <OptionsWrapper>
          <SelectOption
            onClick={handleThemeChange}
            className={theme === THEME_LIGHT && 'hidden'}
            data-cy="option-select-light">
            <Flex>Light theme</Flex>
          </SelectOption>
          <SelectOption
            onClick={handleThemeChange}
            className={theme === THEME_DARK && 'hidden'}
            data-cy="option-select-dark">
            <Flex>Dark theme</Flex>
          </SelectOption>
        </OptionsWrapper>
      )}
    </Select>
  )
}
