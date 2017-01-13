/* eslint-env jest */

import 'react-native'
import React from 'react'
import App from '../'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme'

describe('App', () => {
  it('renders correctly', () => {
    const output = renderer.create(<App />)
    expect(output).toMatchSnapshot()
  })

  it('renders NavigatorIOS', () => {
    const output = shallow(<App />)
    expect(output.find('NavigatorIOS')).toHaveLength(1)
  })
})
