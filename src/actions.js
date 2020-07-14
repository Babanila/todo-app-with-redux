import React from 'react'
import * as actions from './actionTypes'

let initialId = 0

export const addTodo = (text) => ({
  type: actions.ADD_TODO,
  payload: {
    id: ++initialId,
    text,
    completed: false
  }
})

export const completedTodo = (id) => ({
  type: actions.COMPLETED_TODO,
  payload: {
    id
  }
})

export const removeTodo = (id) => ({
  type: actions.REMOVE_TODO,
  payload: { id }
})
