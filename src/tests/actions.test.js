import * as actions from '../redux/actions'
import * as types from '../redux/actionTypes'

describe('actions', () => {
  const mockedTodos = [
    { id: 1, text: 'Start here', completed: false },
    { id: 2, text: 'Turn right', completed: false },
    { id: 3, text: 'Turn left', completed: true },
    { id: 4, text: 'Stop here', completed: false }
  ]

  it('should create an action to add a todo', () => {
    const id = 1
    const text = 'Write Code'
    const expectedAction = {
      type: types.ADD_TODO,
      payload: { id, text, completed: false }
    }
    const actual = actions.addTodo(text)
    expect(actual).toEqual(expectedAction)
  })

  it('should create an action to add a todo with increment id', () => {
    const id = 2
    const text = 'Check Code'
    const expectedAction = {
      type: types.ADD_TODO,
      payload: { id, text, completed: false }
    }
    const actual = actions.addTodo(text)
    expect(actual).toEqual(expectedAction)
  })

  it('should create an action to complete a todo with id', () => {
    const id = 2
    const expectedAction = {
      type: types.COMPLETED_TODO,
      payload: { id }
    }
    const actual = actions.completedTodo(id)
    expect(actual).toEqual(expectedAction)
  })

  it('should create an action to remove a todo an id', () => {
    const id = 3
    const expectedAction = {
      type: types.REMOVE_TODO,
      payload: { id }
    }
    const actual = actions.removeTodo(id)
    expect(actual).toEqual(expectedAction)
  })

  it('should create an action to show all completed todos', () => {
    const expectedAction = {
      type: types.SHOW_COMPLETED_TODO,
      payload: mockedTodos
    }
    const actual = actions.showCompletedTodo(mockedTodos)
    expect(actual).toEqual(expectedAction)
  })

  it('should create an action to show all active todos', () => {
    const expectedAction = {
      type: types.SHOW_ACTIVE_TODO,
      payload: mockedTodos
    }
    const actual = actions.showActiveTodo(mockedTodos)
    expect(actual).toEqual(expectedAction)
  })

  it('should create an action to show all active todos', () => {
    const expectedAction = {
      type: types.SHOW_ALL_TODO,
      payload: mockedTodos
    }
    const actual = actions.showAllTodo(mockedTodos)
    expect(actual).toEqual(expectedAction)
  })
})
