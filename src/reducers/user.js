import { GET_USER, ADD_USER, LOGOUT, RECEIVE_JWT } from '../actions/users'

const user = (state={}, action) => {
  switch(action.type) {
    case GET_USER:
      return action.payload
    case ADD_USER:
      return state
    case LOGOUT:
      return {}
    case RECEIVE_JWT:
      return state
    default:
      return state
  }
}

export default user
