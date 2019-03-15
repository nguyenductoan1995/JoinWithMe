import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './src/store'
import AppLoading from './src/AppLoading'

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppLoading />
    </PersistGate>
  </Provider>
)
