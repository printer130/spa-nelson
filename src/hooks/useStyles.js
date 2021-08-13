import { useRef, useEffect } from 'react'
import { useWindowSize } from './useWindowSize'

export function useStyles ({ stylesConfig }) {
  const ref = useRef()
  const { windowSize } = useWindowSize()

  useEffect(() => {
    if (windowSize >= 768) { ref.current.style.cssText = stylesConfig?.container || '' }
  }, [windowSize])

  return { ref }
}
