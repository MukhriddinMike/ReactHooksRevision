import React, { useEffect, useState, useRef } from 'react'
import { useForm } from './useForm'
import { useFetch } from './useFetch'
const App = () => {
  const [values, handleChange] = useForm({
    // firstname: '',
    email: '',
    password: '',
  })

  // useEffect(() => {
  //   console.log('render')
  // }, [values.email, values.password])

  // useEffect(() => {
  //   const onMouseMove = (e) => {
  //     console.log(e)
  //   }
  //   window.addEventListener('mousemove', onMouseMove)

  //   return () => {
  //     window.removeEventListener('mousemove', onMouseMove)
  //   }
  // }, [])

  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem('coint'))
  )
  const { data, loading } = useFetch(
    `http://numbersapi.com/${count + 0}/trivia`
  )

  const inputRef = useRef()

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count))
  }, [count])

  return (
    <div>
      <div>{loading ? 'loading...' : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>increment</button>
      <>
        <input
          ref={inputRef}
          type='email'
          name='email'
          placeholder='email'
          value={values.email}
          onChange={handleChange}
        />

        {/* <input
          name='email2'
          placeholder='firstname'
          value={values.firstname1}
          onChange={handleChange}
        /> */}
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
