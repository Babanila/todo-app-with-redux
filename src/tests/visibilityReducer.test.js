import visibilityReducer from '../redux/reducers/visibilityReducer'
import * as types from '../redux/actionTypes'

describe('Visibility reducer', () => {
  const payload = [
    { id: 1, text: 'Start here', completed: false },
    { id: 2, text: 'Turn right', completed: false },
    { id: 3, text: 'Turn left', completed: true },
    { id: 4, text: 'Stop here', completed: false }
  ]

  it('should return the initial state', () => {
    expect(visibilityReducer(undefined, {})).toEqual({
      filteredTodos: []
    })
  })

  it('should handle SHOW_ALL_TODO', () => {
    expect(
      visibilityReducer([], {
        type: types.SHOW_ALL_TODO,
        payload
      })
    ).toEqual({
      filteredTodos: payload
    })
  })

  it('should handle SHOW_COMPLETED_TODO', () => {
    expect(
      visibilityReducer([], {
        type: types.SHOW_COMPLETED_TODO,
        payload
      })
    ).toEqual({
      filteredTodos: [{ id: 3, text: 'Turn left', completed: true }]
    })
  })

  it('should handle SHOW_ACTIVE_TODO', () => {
    expect(
      visibilityReducer([], {
        type: types.SHOW_ACTIVE_TODO,
        payload
      })
    ).toEqual({
      filteredTodos: [
        { id: 1, text: 'Start here', completed: false },
        { id: 2, text: 'Turn right', completed: false },
        { id: 4, text: 'Stop here', completed: false }
      ]
    })
  })
})
