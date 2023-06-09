import { useEffect, useState } from 'react'

import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import { Todo } from '../../@types/todo.type'

import styles from './todoList.module.scss'
// interface HandleNewTodos {
//   (todos: Todo[]): Todo[]
// }

type HandleNewTodos = (todos: Todo[]) => Todo[]

const syncReactToLocal = (handleNewTodos: HandleNewTodos) => {
  const todosString = localStorage.getItem('todos')
  const todosObj: Todo[] = JSON.parse(todosString || '[]')
  // const newTodosObj = [...todosObj, todo] // Before
  const newTodosObj = handleNewTodos(todosObj) // After
  localStorage.setItem('todos', JSON.stringify(newTodosObj))
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null)

  const doneTodos = todos.filter((todo) => todo.done)
  const notDoneTodos = todos.filter((todo) => !todo.done)

  useEffect(() => {
    const todosString = localStorage.getItem('todos')
    const todosObj: Todo[] = JSON.parse(todosString || '[]')
    setTodos(todosObj)

    // Lưu ý Error Boundary không bắt được các lỗi
    // 1.- Code bất đồng bộ

    //   setTimeout(() => {
    //     let a: any = null
    //     a.b = 0
    //   })
    //   // setTodos(null)
  }, [])

  const addTodo = (name: string) => {
    const todo: Todo = {
      name,
      done: false,
      id: new Date().toISOString()
    }
    // 3. - Event handler
    // 4. - Server side rendering
    // try {
    //   let a: any = null
    //   a.b = 0
    // } catch (error) {
    //   console.log('Loi roi')
    // }
    setTodos((prev) => [...prev, todo])
    const handler = (todosObj: Todo[]) => {
      return [...todosObj, todo]
    }
    syncReactToLocal(handler)
  }

  const handleDoneTodo = (id: string, done: boolean) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done }
        }
        return todo
      })
    })
  }

  const startEditTodo = (id: string) => {
    const findedTodo = todos.find((todo) => todo.id === id)
    if (findedTodo) {
      setCurrentTodo(findedTodo)
    }
  }

  const editTodo = (name: string) => {
    setCurrentTodo((prev) => {
      if (prev) return { ...prev, name }
      return null
    })
  }

  const finishEditTodo = () => {
    const handler = (todoObj: Todo[]) => {
      return todoObj.map((todo) => {
        // if (todo.id === currentTodo?.id) {
        if (todo.id === (currentTodo as Todo).id) {
          return currentTodo as Todo
        }
        return todo
      })
    }
    setTodos(handler)
    setCurrentTodo(null)
    syncReactToLocal(handler)
  }

  const deleteTodo = (id: string) => {
    if (currentTodo) {
      setCurrentTodo(null)
    }
    const handler = (todosObj: Todo[]) => {
      const findedIndexTodo = todosObj.findIndex((todo) => todo.id === id)
      if (findedIndexTodo > -1) {
        const result = [...todosObj]
        result.splice(findedIndexTodo, 1)
        return result
      }
      return todosObj
    }
    setTodos(handler)
    syncReactToLocal(handler)
  }

  // const deleteTodo = (id: string) => {
  //   if (currentTodo) {
  //     setCurrentTodo(null)
  //   }
  //   const handler = (todoObj: Todo[]) => {
  //     const findedIndexTodo = todoObj.findIndex((todo) => todo.id === id)
  //     if (findedIndexTodo > -1) {
  //       const result = [...todoObj]
  //       result.splice(findedIndexTodo, 1)
  //       return result
  //     }
  //     return todoObj
  //   }
  //   setTodos(handler)
  //   syncReactToLocal(handler)
  // }

  // console.log(todos)
  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        <TaskInput addTodo={addTodo} currentTodo={currentTodo} editTodo={editTodo} finishEditTodo={finishEditTodo} />
        <TaskList
          todos={notDoneTodos}
          handleDoneTodo={handleDoneTodo}
          startEditTodo={startEditTodo}
          deleteTodo={deleteTodo}
        />
        <TaskList
          doneTaskList
          todos={doneTodos}
          handleDoneTodo={handleDoneTodo}
          startEditTodo={startEditTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  )
}
