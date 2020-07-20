import React from 'react'
import * as actions from '../actionTypes'

const initialState = {
  filteredTodos: []
}

function visibilityReducer(state = initialState, { type, payload }) {
  switch (type) {
    case actions.SHOW_ALL_TODO:
      return { ...state, filteredTodos: payload }

    case actions.SHOW_COMPLETED_TODO:
      return { ...state, filteredTodos: payload.filter((item) => item.completed) }

    case actions.SHOW_ACTIVE_TODO:
      return { ...state, filteredTodos: payload.filter((item) => !item.completed) }

    default:
      return state
  }
}

export default visibilityReducer
