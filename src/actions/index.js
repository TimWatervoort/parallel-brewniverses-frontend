export const GET_POSTS = 'GET_POSTS'
export const ADD_POST = 'ADD_POST'
export const PATCH_POST = 'PATCH_POST'

const authorMap = {1: 'nickgriff'}

const apiUrl = 'https://test-brew.herokuapp.com'

export const getPosts = () => {
  return async dispatch => {
    const response = await fetch(`${apiUrl}/posts`)
    const json = await response.json()
    json.forEach(x => {
      x.tags = x.tags.map(y => y.tag)
      x.author = authorMap[x.author]
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
    json.tags = json.tags.map(x => x.tag)
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
    json.tags = json.tags.map(x => x.tag)
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
    json.tags = json.tags.map(x => x.tag)
    dispatch({
      type: PATCH_POST,
      payload: json
    })
  }
}
