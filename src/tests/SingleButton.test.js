import React from 'react'
import { shallow } from 'enzyme'
import SingleButton from '../components/SingleButton'

describe('SingleButton', () => {
  let props, SingleButtonWrapper

  beforeAll(() => {
    props = {
      btnName: 'delete',
      btnClick: jest.fn()
    }

    SingleButtonWrapper = shallow(<SingleButton {...props} />)
  })

  it('should be defined', () => {
    expect(SingleButton).toBeDefined()
  })

  it('should be a function', () => {
    expect(typeof SingleButton).toBe('function')
  })

  it('should renders site title correctly', () => {
    const wrapper = shallow(<SingleButton {...props} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render the exact number of element in component', () => {
    expect(SingleButtonWrapper.find('button').length).toEqual(1)
  })

  it('should perform operation on button click', () => {
    const mockedButtonClick = jest.fn()
    const wrapper = shallow(<SingleButton {...props} btnClick={mockedButtonClick} />)
    const btn = wrapper.find('button')
    btn.find('button').simulate('click')
    expect(mockedButtonClick.mock.calls.length).toEqual(1)
  })
})
