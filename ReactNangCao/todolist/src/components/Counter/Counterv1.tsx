import React, { useReducer, useState } from 'react'

const initialState = { age: 26 }
type ActionType = IncreaseAgeAction | DecreaseAgeAction | IncreaseXAgeAction

type IncreaseAgeAction = { type: 'increase_age' }
type DecreaseAgeAction = { type: 'decrease_age' }
type IncreaseXAgeAction = { type: 'increase_xage'; payload: number }

const increaseAgeAction = () => {
  return { type: 'increase_age' } as IncreaseAgeAction
}
const decreaseAgeAction = () => {
  return { type: 'decrease_age' } as DecreaseAgeAction
}
const increaseXAgeAction = (payload: number) => {
  return { type: 'increase_xage', payload } as IncreaseXAgeAction
}

const reducer = (state: typeof initialState, action: ActionType) => {
  if (action.type === 'increase_age') {
    return { ...state, age: state.age + 1 }
  }
  if (action.type === 'decrease_age') {
    return { ...state, age: state.age - 1 }
  }
  if (action.type === 'increase_xage') {
    return { ...state, age: state.age + action.payload }
  }
  //   return state
  throw Error('Invalid Action', action)
}

export default function Counter() {
  //   const [state, setState] = useState<{ age: number }>({ age: 26 })
  const [state, dispatch] = useReducer(reducer, initialState)

  const increaseage = () => {
    dispatch(increaseAgeAction())
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
