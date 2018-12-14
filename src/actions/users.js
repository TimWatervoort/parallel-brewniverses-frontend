import Cookies from 'js-cookie'

export const GET_USER = 'GET_USER'
export const GET_USERS = 'GET_USERS'
export const ADD_USER = 'ADD_USER'
export const SET_USER_COOKIE = 'SET_USER_COOKIE'

const apiUrl = 'https://test-brew.herokuapp.com'

export const getUser = () => {
  return async dispatch => {
    const response = await fetch(`${apiUrl}/users/1`)
    const json = await response.json()
    dispatch({
      type: GET_USER,
      payload: json
    })
  }
}

export const getUsers = () => {
  return async dispatch => {
    const response = await fetch(`${apiUrl}/users/`)
    const json = await response.json()
    dispatch({
      type: GET_USERS,
      payload: json
    })
  }
}

export const addUser = input => {
  return async dispatch => {
    const response = await fetch (`${apiUrl}/users/`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(input)
    })
    const json = await response.json()
    dispatch({
      type: ADD_USER,
      payload: json
    })
  }
}

export const addSubscription = (input, existing) => {
  const newTag = {
    tag: input
  }
  const updatedTags = [...existing, newTag]
  console.log(updatedTags);
  return async dispatch => {
    const response = await fetch (`${apiUrl}/users/1`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({channels: updatedTags})
    })
    const json = await response.json()
    dispatch({
      type: GET_USER,
      payload: json
    })
  }
}

export const removeSubscription = (input, existing) => {
  const trimmedTags = existing.filter(x => x.tag !== input)
  const tagsToSend = [];
  trimmedTags.forEach(x => tagsToSend.push({tag: x.tag}))
  console.log(tagsToSend);
  return async dispatch => {
    const response = await fetch (`${apiUrl}/users/1`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({channels: tagsToSend})
    })
    const json = await response.json()
    console.log(json);
    dispatch({
      type: GET_USER,
      payload: json
    })
  }
}

export const setUserCookie = input => {
  Cookies.set('name', input)
  return async dispatch => {
    const response = await fetch(`${apiUrl}/users/1`)
    const json = await response.json()
    dispatch({
      type: SET_USER_COOKIE,
      payload: json
    })
  }
}
