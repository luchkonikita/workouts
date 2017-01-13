/**
 * @flow
 */

import React, {Component} from 'react'
import {AppRegistry} from 'react-native'
import App from './app/components/App'

export default class Workouts extends Component {
  render () {
    return (
      <App />
    )
  }
}

AppRegistry.registerComponent('Workouts', () => Workouts)
