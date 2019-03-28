/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'
import Chat from './src/screens/Chat'

AppRegistry.registerComponent(appName, () => App)
// AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => Chat)
