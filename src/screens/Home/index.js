import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class Home extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => { navigation.navigate('Chat') }}>
          <Text>Toan</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Home
