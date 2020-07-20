import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cx, css } from 'emotion'
import SingleTodo from './SingleTodo'
import { completedTodo, removeTodo } from '../actions'

const ulStyles = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

function TodoList() {
  const todos = useSelector((state) => state.todoReducer.todos)
  const filteredTodos = useSelector((state) => state.visibilityReducer.filteredTodos)
  const [todoDetails, setTodoDetails] = React.useState(todos)

  React.useEffect(() => {
    filteredTodos.length !== 0 ? setTodoDetails(filteredTodos) : setTodoDetails(todos)
  }, [todos, filteredTodos])

  const dispatch = useDispatch()
  const handleClick = (e, id) => dispatch(completedTodo(id))
  const handleDeleteClick = (e, id) => dispatch(removeTodo(id))

  return (
    <ul className={cx(ulStyles)}>
      {todoDetails?.map((items, i) => (
        <SingleTodo key={i} {...items} cancelClick={handleClick} deleteClick={handleDeleteClick} />
      ))}
    </ul>
  )
}

export default TodoList
