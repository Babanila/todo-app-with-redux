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

export const showAllTodo = (todos) => ({
  type: actions.SHOW_ALL_TODO,
  payload: todos
})

export const showCompletedTodo = (todos) => ({
  type: actions.SHOW_COMPLETED_TODO,
  payload: todos
})

export const showActiveTodo = (todos) => ({
  type: actions.SHOW_ACTIVE_TODO,
  payload: todos
})
