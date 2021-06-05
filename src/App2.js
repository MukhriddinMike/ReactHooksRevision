import React, { useEffect, useState, useRef, useLayoutEffect } from 'react'
import { useForm } from './useForm'
import { Hello } from './Hello'
const App = () => {
  const [values, handleChange] = useForm({
    email: '',
    password: '',
  })
  const inputRef = useRef()
  const [showHello, setShowHello] = useState(true)

  useLayoutEffect(() => {
    console.log(inputRef.current.getBoundingClientRect)
  })
  return (
    <div>
      <>
        <button onClick={() => setShowHello(!showHello)}>Toggle</button>
        {showHello && <Hello />}
        <input
          ref={inputRef}
          type='email'
          name='email'
          placeholder='email'
          value={values.email}
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={values.password}
          onChange={handleChange}
        />

        <button onClick={() => console.log(inputRef.current.focus())}>
          Focus
        </button>
      </>
    </div>
  )
}

export default App
