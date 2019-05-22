import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

export default class Video extends Component {
state ={}

render() {
  return (
    <View style={styles.contain} />
  )
}
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
})
