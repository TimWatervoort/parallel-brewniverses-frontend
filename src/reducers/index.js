import { combineReducers } from 'redux'
import posts from './posts'
import user from './user'
import users from './users'

export default combineReducers({posts, user, users})
