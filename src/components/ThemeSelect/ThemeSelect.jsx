import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Select, SelectOption } from './components'

import { changeTheme } from '@/reducers/settings'

export const ThemeSelect = () => {
  const { theme } = useSelector(state => state.settings)
  const dispatch = useDispatch()

  const handleThemeChange = () => {
    dispatch(changeTheme())
  }

  return (
    <Select value={theme} onChange={handleThemeChange}>
      <SelectOption
        value="light"
        className={theme === 'light' && 'hidden'}>
        Light theme
      </SelectOption>
      <SelectOption
        value="dark"
        className={theme === 'dark' && 'hidden'}>
        Dark theme
      </SelectOption>
    </Select>
  )
}
