import { combineReducers } from 'redux'
import helpReducer from './help';

const allReducers = combineReducers(
  {
    helpReducer
  }
)

export default allReducers;