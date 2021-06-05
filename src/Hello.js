import React, { useRef, useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import { useMeasure } from './useMeasure'
export const Hello = () => {
  const renders = useRef(0)
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem('coint'))
  )

  const { data, loading } = useFetch(
    `http://numbersapi.com/${count + 0}/trivia`
  )

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count))
  }, [count])
  // const [rect, setRect] = useState({})

  // useLayoutEffect(() => {
  //   setRect(divRef.current.getBoundingClientRect())
  // }, [data])

  const [rect, divRef] = useMeasure([data])

  console.log('Hello Renders: ', renders.current++)
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div ref={divRef}>{loading ? 'loading...' : data}</div>
      </div>
      <pre>{JSON.stringify(rect, null, 2)}</pre>
      <div>count: {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>increment</button>
    </div>
  )
}
