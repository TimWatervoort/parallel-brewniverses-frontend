import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken'

export const GET_USER = 'GET_USER'
export const GET_USERS = 'GET_USERS'
export const ADD_USER = 'ADD_USER'
export const SET_USER_COOKIE = 'SET_USER_COOKIE'
export const LOGOUT = 'LOGOUT'
export const RECEIVE_JWT = 'RECEIVE_JWT'
export const SEND_ERROR = 'SEND_ERROR'
export const CLEAR_ERROR = 'CLEAR_ERROR'
const CLEAR_SUCCESS = 'CLEAR_SUCCESS'

const apiUrl = 'http://test-brew.herokuapp.com'

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

export const addSubscription = (input, existing) => {
  const newTag = { //puts tag into an object
    tag: input
  }
  const updatedTags = [...existing, newTag] //spread old tags and add new one to array
  return async dispatch => {
    const uid = Cookies.get('user_id') //get necessary info
    const token = Cookies.get('access_token')
    const response = await fetch (`${apiUrl}/users/${uid}`, { //send api call
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({channels: updatedTags})
    })
    const json = await response.json()
    dispatch({ //dispatch to reducer
      type: GET_USER,
      payload: json
    })
  }
}

export const removeSubscription = (input, existing) => {
  const trimmedTags = existing.filter(x => x.tag !== input) //filter out the subscription to remove
  const tagsToSend = [];
  trimmedTags.forEach(x => tagsToSend.push({tag: x.tag})) //only send back the 'tag' key

  return async dispatch => { //api call
    const uid = Cookies.get('user_id')
    const token = Cookies.get('access_token')
    const response = await fetch (`${apiUrl}/users/${uid}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({channels: tagsToSend})
    })
    const json = await response.json()
    dispatch({ //dispatch to reducer
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
    const response = await fetch(`${apiUrl}/api/token/`, { //get access token
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(input)
    })
    if (response.status !== 200) {
      dispatch({
        type: SEND_ERROR,
        payload: 'login-error'
      })
    } else {
        const json = await response.json()
        Cookies.set('access_token', json.access) //set access token in cookies
        const uid = jwt.decode(json.access) //get user id from jwt
        Cookies.set('user_id', uid.user_id) //set user id in cookies
        dispatch({ //send dispatch to reducer
          type: RECEIVE_JWT,
          payload: json
        })

        const response2 = await fetch(`${apiUrl}/users/${uid.user_id}`) //get user
        const json2 = await response2.json()
        dispatch({ //send user to reducer
          type: GET_USER,
          payload: json2
        })
        dispatch({
          type: CLEAR_ERROR
        })
      }
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
    if (response.status !== 200 && response.status !== 201) {
      dispatch({
        type: SEND_ERROR,
        payload: 'signup-error'
      })
    } else {
      const json = await response.json()

      dispatch(userLogin({username: input.username, password: input.password}))

      dispatch({
        type: ADD_USER,
        payload: json
      })

      dispatch({
        type: CLEAR_ERROR
      })

      setTimeout(() => {
        dispatch({
          type: CLEAR_SUCCESS
        })
      }, 1000)

    }
  }
}

export const editUser = (id, input) => {
  return async dispatch => {
    const token = Cookies.get('access_token')
    const response = await fetch(`${apiUrl}/users/${id}`, {
      method: 'PATCH',
      headers: {"Content-Type": "application/json",
      "Authorization": `Bearer ${token}`},
      body: JSON.stringify(input)
    })
    const json = await response.json()
    dispatch({
      type: GET_USER,
      payload: json
    })
  }
}
