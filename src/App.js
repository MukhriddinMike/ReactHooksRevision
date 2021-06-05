import React, { useState } from 'react'
import { Hello2 } from './Hello2'
const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Hello2 increment={() => setCount(count + 1)} />
      <div>count: {count}</div>
    </div>
  )
}

export default App
