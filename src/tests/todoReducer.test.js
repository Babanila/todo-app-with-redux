import todoReducer from '../redux/reducers/todoReducer'
import * as types from '../redux/actionTypes'

describe('Todo reducer', () => {
  let payload, initialState, initialState2
  beforeEach(() => {
    payload = [
      { id: 1, text: 'Start here', completed: false },
      { id: 2, text: 'Turn right', completed: false },
      { id: 3, text: 'Turn left', completed: true },
      { id: 4, text: 'Stop here', completed: false }
    ]

    initialState = {
      todos: []
    }

    initialState2 = {
      todos: [...payload]
    }
  })

  it('should return the initial state', () => {
    expect(todoReducer(initialState, {})).toEqual({
      todos: []
    })
  })

  it('should handle ADD_TODO', () => {
    expect(
      todoReducer(initialState, {
        type: types.ADD_TODO,
        payload: payload[0]
      })
    ).toEqual({
      todos: [
        {
          id: 1,
          text: 'Start here',
          completed: false
        }
      ]
    })
  })

  it('should handle REMOVE_TODO', () => {
    expect(
      todoReducer(initialState2, {
        type: types.REMOVE_TODO,
        payload: { id: 2 }
      })
    ).toEqual({
      todos: [
        { id: 1, text: 'Start here', completed: false },
        { id: 3, text: 'Turn left', completed: true },
        { id: 4, text: 'Stop here', completed: false }
      ]
    })
  })

  it('should handle COMPLETED_TODO', () => {
    expect(
      todoReducer(initialState2, {
        type: types.COMPLETED_TODO,
        payload: { id: 1 }
      })
    ).toEqual({
      todos: [
        { id: 1, text: 'Start here', completed: true },
        { id: 2, text: 'Turn right', completed: false },
        { id: 3, text: 'Turn left', completed: true },
        { id: 4, text: 'Stop here', completed: false }
      ]
    })
  })
})
