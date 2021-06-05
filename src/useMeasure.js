import { useState, useLayoutEffect, useRef } from 'react'

export const useMeasure = (deps) => {
  const myRef = useRef()
  const [rect, setRect] = useState({})

  useLayoutEffect(() => {
    setRect(myRef.current.getBoundingClientRect())
  }, deps)

  return [rect, myRef]
}
