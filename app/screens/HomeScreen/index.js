/**
 * @flow
 */

import React, {Component} from 'react'
import {ListView, StyleSheet} from 'react-native'
import {COLORS} from 'app/constants'
import WorkoutListItem from 'app/components/WorkoutListItem'
import {mockWorkouts} from 'app/fixtures'

export default class HomeScreen extends Component {
  state = {
    dataSource: new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.id !== r2.id
    })
  }

  componentDidMount () {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(mockWorkouts)
    })
  }

  render () {
    return (
      <ListView
        automaticallyAdjustContentInsets={false}
        style={styles.Wrapper}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <WorkoutListItem {...rowData} />} />
    )
  }
}

const styles = StyleSheet.create({
  Wrapper: {
    backgroundColor: COLORS.LIGHT_GREY,
    padding: 12
  }
})

export const route = {
  title: 'Workouts',
  component: HomeScreen,
  rightButtonSystemIcon: 'add',
  titleTextColor: COLORS.BLACK,
  tintColor: COLORS.BLUE
}
