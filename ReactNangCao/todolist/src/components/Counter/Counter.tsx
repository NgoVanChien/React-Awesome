import React, { useReducer, useState } from 'react'
import { increaseAgeAction } from '../../reducer/actions'
import { decreaseAgeAction } from '../../reducer/actions'
import { increaseXAgeAction } from '../../reducer/actions'
import reducer, { init, initialState, log } from '../../reducer/reducer'

export default function Counter() {
  //   const [state, setState] = useState<{ age: number }>({ age: 26 })
  const [state, dispatch] = useReducer(log(), initialState, init)

  const increaseage = () => {
    dispatch(increaseAgeAction())
    // const nextState = reducer(state, increaseAgeAction())
    // console.log(nextState.age)
  }
  const decreaseage = () => {
    dispatch(decreaseAgeAction())
  }
  const increaseXage = (value: number) => {
    dispatch(increaseXAgeAction(value))
  }

  return (
    <>
      <button onClick={decreaseage} style={{ color: 'red' }}>
        {' '}
        Decrease Age
      </button>
      <p>Age: {state.age}</p>
      <button onClick={increaseage} style={{ color: 'blue' }}>
        {' '}
        Increase Age
      </button>
      <button onClick={() => increaseXage(3)} style={{ color: 'orange' }}>
        {' '}
        Increase X SAge
      </button>
    </>
  )
}
