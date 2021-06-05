import React from 'react'
import { useCounterRenders } from './useCountRenders'
export const Hello2 = React.memo(({ increment }) => {
  useCounterRenders()

  return <button onClick={increment}>Increment</button>
})
