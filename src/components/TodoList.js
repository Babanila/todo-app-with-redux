import React from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'
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
  const dispatch = useDispatch()
  const handleClick = (e, id) => {
    e.preventDefault()
    dispatch(completedTodo(id))
  }

  const handleToggle = (e, id) => {
    e.preventDefault()
    dispatch(completedTodo(id))
  }

  const handleDeleteClick = (e, id) => {
    e.preventDefault()
    dispatch(removeTodo(id))
  }

  return (
    <ul className={cx(ulStyles)}>
      {todos?.map((items, i) => (
        <SingleTodo
          key={i}
          {...items}
          handleToggle={handleToggle}
          cancelClick={handleClick}
          deleteClick={handleDeleteClick}
        />
      ))}
    </ul>
  )
}

export default connect(null, { completedTodo, removeTodo })(TodoList)
