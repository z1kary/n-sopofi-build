import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import userReducer from './userReducer'
import userChannelReducer from './userChannelReducer'
import ulcReducer from './ulcReducer'
import ruReducer from './ruReducer'

export default combineReducers({
  usersReducer,
  userReducer,
  userChannelReducer,
  ulcReducer,
  ruReducer
})