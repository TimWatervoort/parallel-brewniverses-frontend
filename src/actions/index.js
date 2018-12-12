export const GET_POSTS = 'GET_POSTS'
export const ADD_POST = 'ADD_POST'
export const PATCH_POST = 'PATCH_POST'

// const initialPosts = [
//   {
//   id: 1,
//   title: 'Avery Fimbulvvinter',
//   tags: ['beer', 'avery', 'belgian'],
//   content: 'It is incredible.',
//   score: 5,
//   rating: 5,
//   picture: 'https://cdn.beeradvocate.com/im/beers/310321.jpg',
//   author: 'TimWatervoort'
//   },
//   {
//   id: 2,
//   title: 'Old Rasputin',
//   tags: ['beer', 'north coast', 'imperial', 'stout'],
//   content: 'What a Russian day in the neighborhood.',
//   score: 3,
//   rating: 5,
//   picture: 'https://www.totalwine.com/media/sys_master/twmmedia/h75/h5d/9071470805022.png',
//   author: 'JPCornejo'
// },
// {
//   id: 3,
//   title: '90 Shilling',
//   tags: ['beer', 'odell', 'amber'],
//   content: 'Does not taste like coins at all.',
//   score: 4,
//   rating: 5,
//   picture: 'https://cdn.beeradvocate.com/im/beers/740.jpg',
//   author: 'NickGriffen'
// }
// ]

const tagMap = {1: ['beer', 'avery', 'belgian'], 2: ['beer', 'north coast', 'imperial', 'stout'], 3: ['beer', 'odell', 'amber']}
const authorMap = {1: 'TimWatervoort', 2:'JPCornejo', 3:'NickGriffen'}

const apiUrl = 'https://test-brew.herokuapp.com'


export const getPosts = () => {
  return async dispatch => {
    const response = await fetch(`${apiUrl}/posts`)
    const json = await response.json()
    json.forEach(x => {
      x.tags = tagMap[x.id]
      x.author = authorMap[x.id]
    })
    dispatch({
      type: GET_POSTS,
      payload: json
    })
  }
}

export const addPost = input => {
  return async dispatch => {
    const response = await fetch(`${apiUrl}/posts/`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(input)
    })
    const json = await response.json()
    dispatch({
      type: ADD_POST,
      payload: json
    })
  }
}

export const upvote = (id, score) => {
  let upvoted = parseInt(score);
  upvoted++
  return async dispatch => {
    const response = await fetch(`${apiUrl}/posts/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        score: upvoted
      })
    })
    const json = await response.json()
    json.tags = tagMap[json.id]
    dispatch({
      type: PATCH_POST,
      payload: json
    })
  }
}

export const downvote = (id, score) => {
  let downvoted = parseInt(score);
  downvoted--
  return async dispatch => {
    const response = await fetch(`${apiUrl}/posts/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        score: downvoted
      })
    })
    const json = await response.json()
    json.tags = tagMap[json.id]
    dispatch({
      type: PATCH_POST,
      payload: json
    })
  }
}
