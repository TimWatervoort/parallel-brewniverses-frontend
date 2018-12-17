import { SEND_ERROR, CLEAR_ERROR } from '../actions/users'

const errors = (state='', action) => {
  switch(action.type) {
    case SEND_ERROR:
      return action.payload
    case CLEAR_ERROR:
      return ''
    default:
      return state
  }
}

export default errors
