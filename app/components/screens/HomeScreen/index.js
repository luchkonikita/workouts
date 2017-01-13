/**
 * @flow
 */

import React, {Component} from 'react'
import {Text} from 'react-native'
import {TEXT_STYLES} from 'app/styles'

export default class HomeScreen extends Component {
  render () {
    return (
      <Text>Home Screen</Text>
    )
  }
}

export const route = {
  component: HomeScreen,
  title: 'Workouts',
  rightButtonSystemIcon: 'add',
  titleTextColor: TEXT_STYLES.MAIN_COLOR,
  tintColor: TEXT_STYLES.MAIN_COLOR
}
