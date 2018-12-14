import { GET_POSTS, ADD_POST, PATCH_POST, DELETE_POST } from '../actions/index';

const posts = (state=[], action) => {
  switch(action.type){
    case GET_POSTS:
      action.payload.sort((x,y) => x.id-y.id)
      return action.payload
    case ADD_POST:
      return [...state, action.payload]
    case PATCH_POST:
      const removeOld = state.filter(x => x.id !== action.payload.id)
      const newState = [...removeOld, action.payload]
      newState.sort((x,y) => x.id-y.id)
      return [...newState]
    case DELETE_POST:
      const filteredState = state.filter(x => x.id !== action.payload)
      return [...filteredState]
    default:
      return state;
  }
}

export default posts;
