import React, { useState } from 'react'
import { useDispatch, connect } from 'react-redux'
import { cx, css } from 'emotion'
import { addTodo } from '../actions'

const addTodoDivStyles = css`
  width: 100%;
  display: flex;
  justify-content: center;
`

const formStyles = css`
  width: 80%;
  display: flex;
  justify-content: center;
`

const inputStyles = css`
  width: 60%;
  height: 2em;
  border: 1px solid #000000;
  border-radius: 5px;
  padding-left: 1em;
`
const addButtonStyles = css`
  font-size: 16px;
  color: #ffffff;
  background: #0000ff;
  border: 1px solid #0000ff;
  border-radius: 5px;
  padding: 0 10px;
  margin-left: 5px;
  outline: 0;
  &:hover {
    cursor: pointer;
    background: #ffffff;
    color: #000000;
    border: 1px solid #000000;
  }
`

function AddTodo() {
  const [input, setInput] = useState('')
  const handleInputChange = (item) => setInput(item)
  const dispatch = useDispatch()

  const handleCreateTodo = (e) => {
    e.preventDefault()
    if (input) dispatch(addTodo(input))
    setInput('')
  }
  return (
    <div className={cx(addTodoDivStyles)}>
      <form className={cx(formStyles)} onSubmit={handleCreateTodo}>
        <input
          placeholder='What needs to be done?...'
          className={cx(inputStyles)}
          value={input}
          onChange={(e) => handleInputChange(e.target.value)}
        />
        <button className={cx(addButtonStyles)} type='submit' onClick={handleCreateTodo}>
          Add
        </button>
      </form>
    </div>
  )
}
export default connect(null, { addTodo })(AddTodo)
