import { GET_USER, ADD_USER, SET_USER_COOKIE, LOGOUT } from '../actions/users'

const user = (state={}, action) => {
  switch(action.type) {
    case GET_USER:
      return action.payload
    case ADD_USER:
      return state
    case SET_USER_COOKIE:
      return action.payload
    case LOGOUT:
      return {}
    default:
      return state
  }
}

export default user
