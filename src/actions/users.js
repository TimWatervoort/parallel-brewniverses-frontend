import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken'

export const GET_USER = 'GET_USER'
export const GET_USERS = 'GET_USERS'
export const ADD_USER = 'ADD_USER'
export const SET_USER_COOKIE = 'SET_USER_COOKIE'
export const LOGOUT = 'LOGOUT'
export const RECEIVE_JWT = 'RECEIVE_JWT'

const apiUrl = 'https://test-brew.herokuapp.com'

export const getUser = () => {
  return async dispatch => {
    if (!Cookies.get('user_id')) {
      dispatch({
        type: GET_USER,
        payload: {}
      })
    } else {
      const uid = Cookies.get('user_id')
      const response = await fetch(`${apiUrl}/users/${uid}`)
      const json = await response.json()
      dispatch({
        type: GET_USER,
        payload: json
      })
    }
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
    const uid = Cookies.get('user_id')
    const response = await fetch (`${apiUrl}/users/${uid}`, {
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
  return async dispatch => {
    const uid = Cookies.get('user_id')
    const response = await fetch (`${apiUrl}/users/${uid}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({channels: tagsToSend})
    })
    const json = await response.json()
    dispatch({
      type: GET_USER,
      payload: json
    })
  }
}

export const userLogout = () => {
  Cookies.remove('user_id')
  Cookies.remove('access_token')
  return dispatch => {
    dispatch({
      type: LOGOUT
    })
  }
}

export const userLogin = input => {
  return async dispatch => {
    const response = await fetch(`${apiUrl}/api/token/`, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(input)
    })
    const json = await response.json()
    Cookies.set('access_token', json.access)
    const uid = jwt.decode(json.access)
    Cookies.set('user_id', uid.user_id)
    dispatch({
      type: RECEIVE_JWT,
      payload: json
    })

    const response2 = await fetch(`${apiUrl}/users/${uid.user_id}`)
    const json2 = await response2.json()
    dispatch({
      type: GET_USER,
      payload: json2
    })

  }
}
