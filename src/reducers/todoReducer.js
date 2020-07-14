import React from 'react'
import * as actions from '../actionTypes'

const initialState = {
  todos: []
}

function todoReducer(state = initialState, { type, payload }) {
  switch (type) {
    case actions.ADD_TODO:
      return { ...state, todos: [...state.todos, payload] }

    case actions.COMPLETED_TODO:
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === payload.id ? { ...item, completed: !item.completed } : item
        )
      }

    case actions.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== payload.id)
      }

    default:
      return state
  }
}

export default todoReducer
