import { combineReducers } from 'redux'
import title from './title';

const allReducers = combineReducers(
  {
    title
  }
)

export default allReducers;