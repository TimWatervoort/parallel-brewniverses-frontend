import { GET_USER, ADD_USER, LOGOUT, RECEIVE_JWT } from '../actions/users'

const user = (state={}, action) => {
  switch(action.type) {
    case GET_USER:
      return action.payload
    case ADD_USER:
      console.log(action.payload);
      return state
    case LOGOUT:
      return {}
    case RECEIVE_JWT:
      console.log(action.payload);
      return state
    default:
      return state
  }
}

export default user
