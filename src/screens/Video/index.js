import React, { Component } from 'react'
import { View, StyleSheet, ScrollView, Text, Alert } from 'react-native'
import Video from 'react-native-af-video-player'

export default class Videos extends Component {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation
    // Setup the header and tabBarVisible status
    const header = state.params && (state.params.fullscreen ? undefined : null)
    const tabBarVisible = state.params ? state.params.fullscreen : true
    return {
      // For stack navigators, you can hide the header bar like so
      header,
      // For the tab navigators, you can hide the tab bar like so
      tabBarVisible,
    }
  }

state ={}

onFullScreen(status) {
  const { navigation } = this.props
  navigation.setParams({
    fullscreen: !status,
  })
}

onMorePress = () => {
  Alert.alert(
    'Boom',
    'This is an action call!',
    [{ text: 'Aw yeah!' }],
  )
}

render() {
  const url = 'http://techslides.com/demos/sample-videos/small.mp4'
  const logo = 'https://your-url.com/logo.png'
  const placeholder = 'https://your-url.com/placeholder.png'
  const title = 'My video title'

  return (
    <View style={styles.container}>
      <Video
        autoPlay
        url={url}
        title={title}
        logo={logo}
        placeholder={placeholder}
        onMorePress={() => this.onMorePress()}
        onFullScreen={status => this.onFullScreen(status)}
 //       fullScreenOnly
        rotateToFullScreen
      />
      <ScrollView>
        <Text>Some content here...</Text>
      </ScrollView>
    </View>
  )
}
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  backgroundVideo: {
    width: '100%',
    height: 200,
  },
})
