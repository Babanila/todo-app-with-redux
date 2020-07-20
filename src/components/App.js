import React from 'react'
import { cx, css } from 'emotion'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import ButtonGroup from './ButtonGroup'

const rootDiv = css`
  margin-top: 3em;
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
`

function App() {
  return (
    <div className={cx(rootDiv)}>
      <h1>Simple Todo App</h1>
      <AddTodo />
      <TodoList />
      <ButtonGroup />
    </div>
  )
}

export default App
