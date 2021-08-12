import { useRef, useEffect } from 'react'

export function useStyles ({ stylesConfig }) {
  const ref = useRef()
  useEffect(() => {
    ref.current.style.cssText = stylesConfig?.container || ''
  }, [ref])

  return { ref }
}
