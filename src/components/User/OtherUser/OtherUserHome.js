import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'

import OtherUserProfile from './UserProfile'
import OtherUserSubscriptions from './UserSubscriptions'
import OtherUserPosts from './UserPosts'

class OtherUserHome extends Component {

  render() {

    const { match, users } = this.props
    const id = match.params.id

    const user = users.filter(x => parseInt(x.id) === parseInt(id))

    return (

      <div className="container">
        {user.length === 0 ? <Redirect to='/' /> : <div></div>}
        {parseInt(Cookies.get('user_id')) === parseInt(id) ? <Redirect to='/user' /> : <div></div>}
        <OtherUserProfile id={id}/>
        <OtherUserSubscriptions id={id}/>
        <OtherUserPosts id={id}/>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  users: state.users
})

export default connect(mapStateToProps)(OtherUserHome)
