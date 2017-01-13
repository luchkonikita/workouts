/**
 * @flow
 */

import React, {Component} from 'react'
import {StyleSheet, NavigatorIOS} from 'react-native'
import {route as homeScreenRoute} from 'app/components/screens/HomeScreen'

export default class App extends Component {
  render () {
    return (
      <NavigatorIOS
        style={styles.Navigator}
        itemWrapperStyle={styles.NavigatorInner}
        initialRoute={homeScreenRoute} />
    )
  }
}

const styles = StyleSheet.create({
  Navigator: {
    flex: 1
  },
  NavigatorInner: {
    marginTop: 64
  }
})
