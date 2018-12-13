import { GET_USER, ADD_USER } from '../actions/index'

const user = (state={}, action) => {
  switch(action.type) {
    case GET_USER:
      return action.payload
    case ADD_USER:
      return state
    default:
      return state
  }
}

export default user
