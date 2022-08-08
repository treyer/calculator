import { useEffect } from 'react'

export const useClickOutside = (
  elementRef,
  closeCallback,
) => {
  useEffect(() => {
    const handleClickOutside = event => {
      if (
        !elementRef.current ||
        !elementRef.current.contains(event.target)
      ) {
        closeCallback(event.target)
      }
    }

    document.addEventListener(
      'mousedown',
      handleClickOutside,
    )
    document.addEventListener(
      'touchstart',
      handleClickOutside,
    )

    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside,
      )
      document.removeEventListener(
        'touchstart',
        handleClickOutside,
      )
    }
  }, [elementRef, closeCallback])
}
