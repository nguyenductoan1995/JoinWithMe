import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  PixelRatio,
  Dimensions,
  Platform,
} from 'react-native'
import YouTube, {
  YouTubeStandaloneIOS,
  YouTubeStandaloneAndroid,
} from 'react-native-youtube'

export default class RCTYouTubeExample extends React.Component {
  state = {
    isPlaying: true,
    isLooping: true,
    duration: 0,
    currentTime: 0,
    fullscreen: false,
    containerMounted: false,
    containerWidth: null,
    height: 215,
  };

  onReady = () => {
    this.setState({ isReady: true })
    const { containerWidth } = this.state
    const height = PixelRatio.roundToNearestPixel(
      containerWidth / (16 / 9),
    )
    setTimeout(() => { this.setState({ height }) }, 500)
  }

  render() {
    const { height,
      containerMounted,
      containerWidth,
      isPlaying,
      isLooping,
      fullscreen,
    } = this.state
    return (
      <ScrollView
        style={styles.container}
        onLayout={({
          nativeEvent: {
            layout: { width },
          },
        }) => {
          if (!containerMounted) { this.setState({ containerMounted: true }) }
          if (containerWidth !== width) { this.setState({ containerWidth: width }) }
        }}
      >
        {containerMounted && (
          <YouTube
            ref={(component) => {
              this.youTubeRef = component
            }}
            // You must have an API Key for the player to load in Android
            apiKey="AIzaSyDd-iPuPJJuTbC5VMDcpaR9V_AX0-Qf3io"
            // Un-comment one of videoId / videoIds / playlist.
            // You can also edit these props while Hot-Loading in development mode to see how
            // it affects the loaded native module
            videoId="ncw4ISEU5ik"
            // videoIds={['HcXNPI-IPPM', 'XXlZfc1TrD0', 'czcjU1w-c6k', 'uMK0prafzw0']}
            // playlistId="PLF797E961509B4EB5"
            play={isPlaying}
            loop={isLooping}
            fullscreen={fullscreen}
            controls={1}
            style={[
              {
                height,
              },
              styles.player,
            ]}
            onError={e => this.setState({ error: e.error })}
            onReady={this.onReady}
            onChangeState={e => this.setState({ status: e.state })}
            onChangeQuality={e => this.setState({ quality: e.quality })}
            onChangeFullscreen={e => this.setState({ fullscreen: e.isFullscreen })
            }
            onProgress={e => this.setState({
              duration: e.duration,
              currentTime: e.currentTime,
            })
            }
          />
        )}
        <Text>Toan</Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  button: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'blue',
  },
  buttonTextSmall: {
    fontSize: 15,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  player: {
    alignSelf: 'stretch',
  },
})
