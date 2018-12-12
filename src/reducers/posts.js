import { GET_POSTS, ADD_POST } from '../actions/index';

const posts = (state=[], action) => {
  switch(action.type){
    case GET_POSTS:
      return action.payload
    case ADD_POST:
      return [...state, action.payload]
    default:
      return state;
  }
}

export default posts;
