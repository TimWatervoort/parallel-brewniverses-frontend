import { GET_POSTS, ADD_POST, PATCH_POST } from '../actions/index';

const posts = (state=[], action) => {
  switch(action.type){
    case GET_POSTS:
      return action.payload
    case ADD_POST:
      return [...state, action.payload]
    case PATCH_POST:
      const newState = state.filter(x => x.id !== action.payload.id)
      return [...newState, action.payload]
    default:
      return state;
  }
}

export default posts;
