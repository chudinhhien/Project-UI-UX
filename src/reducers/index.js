import { combineReducers } from 'redux'
import helpReducer from './help';
import helpSider from './helpSider'

const allReducers = combineReducers(
  {
    helpReducer,
    helpSider
  }
)

export default allReducers;