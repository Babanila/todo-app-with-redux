import React from 'react'
import { cx, css } from 'emotion'

const singleDivStyles = css`
  width: 80%;
  line-height: 20px;
  padding: 15px 0 15px 0;
  border-bottom: 1px solid #e6ebed;
  list-style: none;
  display: flex;
  justify-content: flex-start;
`

const checkBoxStyles = css`
  color: #000000;
  background: #ffffff;
  cursor: pointer;
`

const textStyles = css`
  font-size: 20px;
  color: #000000;
  margin-left: 0.5em;
`

const deleteBtnStyles = css`
  font-weight: 500;
  color: #eb0000;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 5px;
  padding: 0 5px;
  margin-left: 0.5em;
  &:hover {
    cursor: pointer;
    background: #eb0000;
    color: #ffffff;
    border: 1px solid #000000;
  }
`

function SingleTodo({ id, text, completed, cancelClick, deleteClick }) {
  return (
    <li className={cx(singleDivStyles)}>
      <div onClick={(e) => cancelClick(e, id)}>
        <input
          className={cx(checkBoxStyles)}
          type='checkbox'
          checked={completed}
          onChange={(e) => cancelClick(e, id)}
        />
        <span
          className={cx(textStyles)}
          style={{
            textDecoration: completed === true ? 'line-through' : 'none'
          }}
        >
          {text}
        </span>
      </div>
      <button
        className={cx(deleteBtnStyles)}
        onClick={(e) => {
          deleteClick(e, id)
        }}
      >
        Delete
      </button>
    </li>
  )
}

export default SingleTodo
