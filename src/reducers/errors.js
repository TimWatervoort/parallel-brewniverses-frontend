import { SEND_ERROR, CLEAR_ERROR } from '../actions/users'
import { ADD_POST_ERROR } from '../actions/index'

const errors = (state='', action) => {
  switch(action.type) {
    case SEND_ERROR:
      return action.payload
    case ADD_POST_ERROR:
      return 'add_post_error'
    case CLEAR_ERROR:
      return ''
    default:
      return state
  }
}

export default errors
