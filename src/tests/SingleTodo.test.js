import React from 'react'
import { shallow } from 'enzyme'
import SingleTodo from '../components/SingleTodo'

describe('SingleTodo', () => {
  let props, SingleTodoWrapper

  beforeAll(() => {
    props = {
      id: 1,
      text: 'Test Codebase',
      completed: false,
      cancelClick: jest.fn(),
      deleteClick: jest.fn()
    }

    SingleTodoWrapper = shallow(<SingleTodo {...props} />)
  })

  it('should be defined', () => {
    expect(SingleTodo).toBeDefined()
  })

  it('should be a function', () => {
    expect(typeof SingleTodo).toBe('function')
  })

  it('should renders site title correctly', () => {
    const wrapper = shallow(<SingleTodo {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render the exact number of element in component', () => {
    expect(SingleTodoWrapper.find('li').length).toEqual(1)
    expect(SingleTodoWrapper.find('div').length).toEqual(1)
    expect(SingleTodoWrapper.find('input').length).toEqual(1)
    expect(SingleTodoWrapper.find('span').length).toEqual(1)
    expect(SingleTodoWrapper.find('button').length).toEqual(1)
  })

  it('should delete todo on click delete button', () => {
    const mockedDeleteClick = jest.fn()
    const wrapper = shallow(<SingleTodo {...props} deleteClick={mockedDeleteClick} />)
    const btn = wrapper.find('button')
    btn.find('button').simulate('click')
    expect(mockedDeleteClick.mock.calls.length).toEqual(1)
  })
})
