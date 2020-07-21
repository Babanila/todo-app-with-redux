import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import ButtonGroup from '../components/ButtonGroup'

const mockStore = configureStore([thunk])

describe('ButtonGroup', () => {
  let store, ButtonGroupWrapper

  beforeEach(() => {
    store = mockStore({
      todoReducer: {
        todos: []
      }
    })

    ButtonGroupWrapper = mount(
      <Provider store={store}>
        <ButtonGroup />
      </Provider>
    ).mount()
  })

  it('should be defined', () => {
    expect(ButtonGroup).toBeDefined()
  })

  it('should be a function', () => {
    expect(typeof ButtonGroup).toBe('function')
  })

  it('should renders site title correctly', () => {
    expect(ButtonGroupWrapper).toMatchSnapshot()
  })

  it('should render the exact number of element in component', () => {
    expect(ButtonGroupWrapper.find('div').length).toEqual(1)
    expect(ButtonGroupWrapper.find('SingleButton').length).toEqual(3)
  })
})
