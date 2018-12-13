import React, { Component } from 'react'
import { connect } from 'react-redux'

import UserProfile from './UserProfile'
import UserSubscriptions from './UserSubscriptions'
import UserPosts from './UserPosts'

class UserHome extends Component {

  render() {
    return (
      <div className="container">
        <UserProfile />
        <UserSubscriptions />
        <UserPosts />
      </div>
    )
  }
}


const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(UserHome)