/**
 * @flow
 */

import React, {Component} from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class Workouts extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>👾</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000'
  },
  welcome: {
    fontSize: 80,
    textAlign: 'center'
  }
})

AppRegistry.registerComponent('Workouts', () => Workouts)
