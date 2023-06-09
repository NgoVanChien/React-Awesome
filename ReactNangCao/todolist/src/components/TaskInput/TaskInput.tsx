import { useCallback, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { Todo } from '../../@types/todo.type'
import styles from './taskInput.module.scss'
import { TodoTypes } from '../../PropTypes/todo.propype'
import connect from '../../HOC/connect'
import { debug, log } from '../../constants'
import Title from '../Title'

interface TaskInputProps {
  addTodo: (name: string) => void
  currentTodo: Todo | null
  editTodo: (name: string) => void
  finishEditTodo: () => void
}

function TaskInput(props: TaskInputProps & typeof injectedProps) {
  const { addTodo, currentTodo, editTodo, finishEditTodo, debug, log } = props
  const [name, setName] = useState<string>('')
  // log(debug)

  const address = useMemo(() => {
    return { street: '10 Tran Hung Dao' }
  }, [])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (currentTodo) {
      finishEditTodo()
      if (name) setName('')
    } else {
      addTodo(name)
      setName('')
    }
  }

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    if (currentTodo) {
      editTodo(value)
    } else {
      setName(value)
    }
  }

  // const handleClick = useCallback((value: any) => {
  //   console.log(value)
  // }, [])

  const handleClick = useMemo(() => {
    return (value: any) => console.log(value)
  }, [])

  return (
    <div className='mb-2'>
      <Title address={address} handleClick={handleClick} />
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='caption goes here'
          value={currentTodo ? currentTodo.name : name}
          onChange={onChangeInput}
        />
        <button type='submit'>{currentTodo ? '✔️' : '➕'}</button>
      </form>
    </div>
  )
}

TaskInput.propTypes = {
  addTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  finishEditTodo: PropTypes.func.isRequired,
  currentTodo: PropTypes.oneOfType([TodoTypes, PropTypes.oneOf([null])])
}
const injectedProps = { debug: debug, log: log }
export default connect(injectedProps)(TaskInput)
