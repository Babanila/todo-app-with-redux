import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import AddTodo from '../components/AddTodo'

const mockStore = configureStore([thunk])

describe('AddTodo', () => {
  let store, AddTodoWrapper

  beforeEach(() => {
    store = mockStore({})

    AddTodoWrapper = mount(
      <Provider store={store}>
        <AddTodo />
      </Provider>
    ).mount()
  })

  it('should be defined', () => {
    expect(AddTodo).toBeDefined()
  })

  it('should be a function', () => {
    expect(typeof AddTodo).toBe('function')
  })

  it('should renders site title correctly', () => {
    expect(AddTodoWrapper).toMatchSnapshot()
  })

  it('should render the exact number of element in component', () => {
    expect(AddTodoWrapper.find('div').length).toEqual(1)
    expect(AddTodoWrapper.find('form').length).toEqual(1)
    expect(AddTodoWrapper.find('input').length).toEqual(1)
    expect(AddTodoWrapper.find('button').length).toEqual(1)
  })

  it('<input> updates input value on onChange event', () => {
    const eventObj = { target: { value: 'Review Code' } }
    expect(AddTodoWrapper.find('input').prop('value')).toEqual('')

    AddTodoWrapper.find('input').simulate('change', eventObj)
    AddTodoWrapper.update()
    expect(AddTodoWrapper.find('input').prop('value')).toEqual('Review Code')
  })
})
