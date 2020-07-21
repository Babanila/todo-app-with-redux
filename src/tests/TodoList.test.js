import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import TodoList from '../components/TodoList'

const mockStore = configureStore([thunk])

describe('TodoList', () => {
  let store, TodoListWrapper

  beforeEach(() => {
    store = mockStore({
      todoReducer: {
        todos: [
          { id: 1, text: 'Write Code', completed: true },
          { id: 2, text: 'Test Code', completed: false },
          { id: 3, text: 'Refactor Code', completed: true },
          { id: 4, text: 'Review Code', completed: false }
        ]
      },
      visibilityReducer: {
        filteredTodos: [
          { id: 1, text: 'Write Code', completed: true },
          { id: 2, text: 'Test Code', completed: false },
          { id: 3, text: 'Refactor Code', completed: true },
          { id: 4, text: 'Review Code', completed: false }
        ]
      }
    })

    TodoListWrapper = mount(
      <Provider store={store}>
        <TodoList />
      </Provider>
    ).mount()
  })

  it('should be defined', () => {
    expect(TodoList).toBeDefined()
  })

  it('should be a function', () => {
    expect(typeof TodoList).toBe('function')
  })

  it('should renders site title correctly', () => {
    expect(TodoListWrapper).toMatchSnapshot()
  })

  it('should render the exact number of element in component', () => {
    expect(TodoListWrapper.find('ul').length).toEqual(1)
    expect(TodoListWrapper.find('div').length).toEqual(4)
    expect(TodoListWrapper.find('li').length).toEqual(4)
  })
})
