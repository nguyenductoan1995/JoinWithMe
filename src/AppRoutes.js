
import React, { Component } from 'react'
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation'
// import { StackViewStyleInterpolator } from 'react-navigation-stack'
import Home from 'screens/Home'
import Chat from 'screens/Chat'
import Youtube from 'screens/Youtube'
import ShimmerPlaceholder from 'screens/ShimmerPlaceholder'

export const AuthRoot = createStackNavigator(
  {
    Home,
    Chat,
    Youtube,
    ShimmerPlaceholder,
  },
  {
    initialRouteName: 'ShimmerPlaceholder',
    mode: 'modal',
  },
)

class AppRoutes extends Component {
  state = {}

  render() {
    const App = createAppContainer(
      createSwitchNavigator(
        {
          Auth: AuthRoot,
        },
        {
          initialRouteName: 'Auth',
        },
      ),
    )
    return <App />
  }
}

export default AppRoutes
