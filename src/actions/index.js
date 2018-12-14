import Cookies from 'js-cookie'

export const GET_POSTS = 'GET_POSTS'
export const ADD_POST = 'ADD_POST'
export const PATCH_POST = 'PATCH_POST'
export const DELETE_POST = 'DELETE_POST'

const apiUrl = 'http://test-brew.herokuapp.com'

export const getPosts = () => {
  return async dispatch => {
    const response = await fetch(`${apiUrl}/posts`)
    const json = await response.json()
    json.forEach(x => {
      x.tags = x.tags.map(y => y.tag)
    })
    dispatch({
      type: GET_POSTS,
      payload: json
    })
  }
}

export const addPost = input => {
  return async dispatch => {
    const token = Cookies.get('access_token')
    const response = await fetch(`${apiUrl}/posts/`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(input)
    })
    const json = await response.json()
    if (json.tags) {
      json.tags = json.tags.map(x => x.tag)
    }
    dispatch({
      type: ADD_POST,
      payload: json
    })
  }
}


const checkVote = id => {
  if (localStorage.getItem(`upvoted${id}`)) {
    return 'downvote_required'
  } else if (localStorage.getItem(`downvoted${id}`)) {
    return 'upvote_required'
  } else {
    return 'clear'
  }
}

export const upvote = (id, score) => {
  const token = Cookies.get('access_token')
  let upvoted = parseInt(score);

  switch(checkVote(id)){      // checks if the item has already been voted on
    case 'downvote_required':
      localStorage.removeItem(`upvoted${id}`)
      upvoted--
      break
    case 'upvote_required':
      localStorage.removeItem(`downvoted${id}`)
      localStorage.setItem(`upvoted${id}`, true)
      upvoted += 2
      break
    default:
      localStorage.setItem(`upvoted${id}`, true)
      upvoted++
      break
  }

  return async dispatch => {
    const response = await fetch(`${apiUrl}/posts/${id}?vote=true`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        score: upvoted
      })
    })
    const json = await response.json()
    console.log(json);
    if (json.tags) {
       json.tags = json.tags.map(x => x.tag)
    }
    dispatch({
      type: PATCH_POST,
      payload: json
    })
  }
}


export const downvote = (id, score) => {
  const token = Cookies.get('access_token')
  let downvoted = parseInt(score);

  switch(checkVote(id)){          // checks if the item has already been voted on
    case 'downvote_required':
      localStorage.removeItem(`upvoted${id}`)
      localStorage.setItem(`downvoted${id}`, true)
      downvoted -= 2
      break
    case 'upvote_required':
      localStorage.removeItem(`downvoted${id}`)
      downvoted ++
      break
    default:
      localStorage.setItem(`downvoted${id}`, true)
      downvoted --
      break
  }

  return async dispatch => {
    const response = await fetch(`${apiUrl}/posts/${id}?vote=true`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        score: downvoted
      })
    })
    const json = await response.json()
    if (json.tags) {
       json.tags = json.tags.map(x => x.tag)
    }
    dispatch({
      type: PATCH_POST,
      payload: json
    })
  }
}

export const deletePost = id => {
  return async dispatch => {
    const token = Cookies.get('access_token')

    await fetch(`${apiUrl}/posts/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": `Bearer ${token}`
      }
    })

    dispatch({
      type: DELETE_POST,
      payload: id
    })
  }
}
