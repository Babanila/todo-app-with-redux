import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cx, css } from 'emotion'
import SingleButton from './SingleButton'
import { showAllTodo, showCompletedTodo, showActiveTodo } from '../actions'

const btnDivStyles = css`
  margin-top: 1em;
  width: 60%;
  height: 2em;
  display: flex;
  justify-content: space-between;
`

function ButtonGroup() {
  const todos = useSelector((state) => state.todoReducer.todos)
  const dispatch = useDispatch()
  const handleShowAllTodo = () => dispatch(showAllTodo(todos))
  const handleShowCompletedTodo = () => dispatch(showCompletedTodo(todos))
  const handleShowActiveTodo = () => dispatch(showActiveTodo(todos))

  return (
    <div className={cx(btnDivStyles)}>
      <SingleButton btnName='All Todo' btnClick={handleShowAllTodo} />
      <SingleButton btnName='Completed Todo' btnClick={handleShowCompletedTodo} />
      <SingleButton btnName='Active Todo' btnClick={handleShowActiveTodo} />
    </div>
  )
}

export default ButtonGroup
