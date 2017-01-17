/**
 * @flow
 */

import React, {Component, PropTypes} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {COLORS} from 'app/constants'

export default class WorkoutListItem extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }

  render () {
    const {title, description} = this.props
    const colored = coloredStyles.pop()

    return (
      <View style={[styles.Wrapper, colored.Wrapper]}>
        <View style={[styles.Title, colored.Title]}>
          <Text style={[styles.TitleText, colored.TitleText]}>
            {title}
          </Text>

        </View>
        <View style={styles.Body}>
          <Text style={[styles.BodyText, colored.BodyText]}>
            {description}
          </Text>
        </View>

        <View style={[styles.Footer, colored.Footer]}>
          <View style={[styles.FooterItem]}>
            <Text style={[styles.FooterText, colored.FooterText]}>
              <Icon name='signal' /> Num. of exercises: 7
            </Text>
          </View>

          <View style={[styles.FooterItem]}>
            <Text style={[styles.FooterText, colored.FooterText]}>
              <Icon name='clock-o' /> Avg. time: 1h 15m
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  Wrapper: {
    borderWidth: 1,
    borderRadius: 2,
    marginBottom: 12,
    shadowColor: COLORS.BLACK,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1
  },
  Title: {
    borderBottomWidth: 1,
    padding: 12
  },
  TitleText: {
    fontSize: 16
  },
  Body: {
    padding: 12
  },
  BodyText: {
    fontSize: 12,
    lineHeight: 16
  },
  Footer: {
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 12
  },
  FooterItem: {
    marginLeft: 12
  },
  FooterText: {
    fontSize: 13
  }
})

// TODO: Get rid of this when DB is implemented
const addColors = ({borderColor, backgroundColor, color}) => StyleSheet.create({
  Wrapper: {backgroundColor, borderColor},
  Title: {borderColor},
  TitleText: {color},
  BodyText: {color},
  Footer: {borderColor},
  FooterText: {color}
})

const coloredStyles = [
  // Purple
  addColors({
    backgroundColor: '#eae6f4',
    borderColor: '#b8a9df',
    color: '#53379a'
  }),
  // Green
  addColors({
    backgroundColor: '#e6f4f0',
    borderColor: '#a9dfd0',
    color: '#1a906f'
  }),
  // Yellow
  addColors({
    backgroundColor: '#f4f3e6',
    borderColor: '#dfd8aa',
    color: '#989317'
  }),
  // Green
  addColors({
    backgroundColor: '#e6f4f0',
    borderColor: '#a9dfd0',
    color: '#1a906f'
  })
]
