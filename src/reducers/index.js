import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import tempReducer from './temp_reducer'

const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer = combineReducers({
  tempPersit: persistReducer(persistConfig, tempReducer),
  tempStore: tempReducer,
})

export default rootReducer
