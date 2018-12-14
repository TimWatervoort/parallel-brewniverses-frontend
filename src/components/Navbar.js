import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/all">
          <img src={require('./Icon/pb_icon.svg')} height="40" className="d-inline-block align-top ml-1" alt="" />
          <img src={require('./Icon/pb_type.svg')} height="40" className="d-inline-block align-top mx-3" alt="" />
        </Link>
        <Link className="btn mb-1 nav-link" to={Cookies.get('user_id') ? '/home' : '/all'}>{Cookies.get('user_id') ? 'My Brewniverses' : 'All Brewniverses'}</Link>
        <Link className="btn mb-1 nav-link" to={Cookies.get('user_id') ? '/addpost' : '/signup'}>{Cookies.get('user_id') ? 'New Review' : 'Sign Up'}</Link>
        <Link className="btn mb-1 nav-link" to={Cookies.get('user_id') ? '/user' : '/login'}>{Cookies.get('user_id') ? 'My Profile' : 'Log In'}</Link>
      </nav>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  user: state.user
})

export default connect(mapStateToProps)(Navbar)
