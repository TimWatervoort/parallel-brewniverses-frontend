import { GET_POSTS, ADD_POST, PATCH_POST, DELETE_POST, SORT_BY_POPULAR, SORT_BY_OLDEST, SORT_BY_RATING } from '../actions/index';

const posts = (state=[], action) => {
  switch(action.type){
    case GET_POSTS:
      action.payload.sort((x,y) => y.id-x.id)
      return action.payload
    case ADD_POST:
      return [action.payload, ...state]
    case PATCH_POST:
      const repIndex = state.findIndex(x => x.id === action.payload.id)
      state.splice(repIndex, 1, action.payload)
      return [...state]
    case DELETE_POST:
      const filteredState = state.filter(x => x.id !== action.payload)
      return [...filteredState]
    case SORT_BY_POPULAR:
      state.sort((x,y) => y.score - x.score)
      return [...state]
    case SORT_BY_OLDEST:
      state.sort((x,y) => x.id - y.id)
      return [...state]
    case SORT_BY_RATING:
      state.sort((x,y) => y.rating - x.rating)
      return [...state]
    default:
      return state;
  }
}

export default posts;
