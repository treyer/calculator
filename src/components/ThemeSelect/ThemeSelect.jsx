import React, { useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  OptionsWrapper,
  Select,
  SelectOption,
} from './components'
import Flex from '@/components/Flex/Flex'

import { changeTheme } from '@/store/actions/settings'
import { capitalizeFirstLetter } from '@/helpers'
import { useClickOutside } from '@/hooks/useClickOutside'

export const ThemeSelect = () => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false)
  const { theme } = useSelector(state => state.settings)
  const dispatch = useDispatch()
  const selectEl = useRef(null)
  useClickOutside(selectEl, () => setIsOptionsOpen(false))

  const handleThemeChange = () => {
    dispatch(changeTheme())
  }

  const handleSelectClick = () => {
    setIsOptionsOpen(prev => !prev)
  }

  return (
    <Select
      className={isOptionsOpen && 'opened'}
      ref={selectEl}
      onClick={handleSelectClick}>
      <Flex>{`${capitalizeFirstLetter(theme)} theme`}</Flex>
      {isOptionsOpen && (
        <OptionsWrapper>
          <SelectOption
            onClick={handleThemeChange}
            className={theme === 'light' && 'hidden'}>
            <Flex>Light theme</Flex>
          </SelectOption>
          <SelectOption
            onClick={handleThemeChange}
            className={theme === 'dark' && 'hidden'}>
            <Flex>Dark theme</Flex>
          </SelectOption>
        </OptionsWrapper>
      )}
    </Select>
  )
}
