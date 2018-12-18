import { ADD_POST, CLEAR_SUCCESS } from '../actions/index'
import { ADD_USER } from '../actions/users'

const success = (state='', action) => {
  switch(action.type) {
    case ADD_POST:
      return parseInt(action.payload.id)
    case ADD_USER:
      return 'add_user_success'
    case CLEAR_SUCCESS:
      return ''
    default:
      return state
  }
}

export default success
