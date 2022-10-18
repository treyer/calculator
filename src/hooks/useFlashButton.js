import { useEffect } from 'react'

export const useFlashButton = (isError, setIsError) => {
  useEffect(() => {
    let timeout
    if (isError === true) {
      timeout = setTimeout(() => {
        setIsError(false)
      }, 200)
    }
    return () => clearTimeout(timeout)
  })
}
