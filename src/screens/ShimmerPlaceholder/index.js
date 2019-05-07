import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Placeholder, { Line, Media, Paragraph, Box } from 'rn-placeholder'

const ComponentLoaded = () => <Text> loaded!</Text>

class ShimmerPlaceholder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isReady: false,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isReady: true })
    }, 3000)
  }


  render() {
    const { isReady } = this.state
    this.loadingAnimated = []
    return (
      <View style={styles.contain}>
        <View style={{ backgroundColor: 'white', flex: 1, margin: 20, padding: 20 }}>
          <Placeholder
            isReady={isReady}
            animation="shine"
            whenReadyRender={() => <ComponentLoaded />}
          >
            <Box width={100} height={100} />
            <Line style={{ borderRadius: 0, marginTop: 20 }} width="100%" />
            <Line style={{ borderRadius: 0 }} width="80%" />
            <Line style={{ borderRadius: 0 }} width="40%" />
          </Placeholder>
        </View>
        <View style={{ backgroundColor: 'white', flex: 1, margin: 20, padding: 20 }}>
          <Placeholder
            isReady={isReady}
            animation="fade"
            whenReadyRender={() => <ComponentLoaded />}
          >
            <Box width={100} height={100} />
            <Line style={{ borderRadius: 0, marginTop: 20 }} width="100%" />
            <Line style={{ borderRadius: 0 }} width="80%" />
            <Line style={{ borderRadius: 0 }} width="40%" />
          </Placeholder>
        </View>

      </View>

    )
  }
}
const styles = StyleSheet.create({
  contain: {
    flex: 1,
    //   backgroundColor: 'red',
    backgroundColor: '#ececec',
  },
})

export default ShimmerPlaceholder
