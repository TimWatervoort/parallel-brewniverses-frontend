import Cookies from 'js-cookie'

export const GET_USER = 'GET_USER'
export const GET_USERS = 'GET_USERS'
export const ADD_USER = 'ADD_USER'
export const SET_USER_COOKIE = 'SET_USER_COOKIE'

const apiUrl = 'https://test-brew.herokuapp.com'

const demoUser = {
  id: 1,
  username: 'nickgriff',
  subscriptions: ['beer', 'amber']
}

export const getUser = () => {
  return dispatch => {
    dispatch({
      type: GET_USER,
      payload: demoUser
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

export const addSubscription = tag => {
  const updatedTags = [...demoUser.subscriptions, tag]
  const newUser = {
    id: 1,
    username: 'nickgriff',
    subscriptions: updatedTags
  }
  return dispatch => {
    dispatch({
      type: GET_USER,
      payload: newUser
    })
  }
}

export const removeSubscription = tag => {
  const fewerTags = demoUser.subscriptions.filter(x => x !== tag)
  const anotherUser = {
    id: 1,
    username: 'nickgriff',
    subscriptions: fewerTags
  }
  return dispatch => {
    dispatch({
      type: GET_USER,
      payload: anotherUser
    })
  }
}

export const setUserCookie = input => {
  Cookies.set('name', input)
  return dispatch => {
    dispatch({
      type: SET_USER_COOKIE,
      payload: input
    })
  }
}
