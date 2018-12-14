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
        <Link className="btn mb-1 nav-link" to={Cookies.get('name') ? '/home' : '/all'}>{Cookies.get('name') ? 'My Brewniverses' : 'All Brewniverses'}</Link>
        <Link className="btn mb-1 nav-link" to={Cookies.get('name') ? '/addpost' : '/signup'}>{Cookies.get('name') ? 'New Review' : 'Sign Up'}</Link>
        <Link className="btn mb-1 nav-link" to={Cookies.get('name') ? '/user' : '/login'}>{Cookies.get('name') ? 'My Profile' : 'Log In'}</Link>
      </nav>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  user: state.user
})

export default connect(mapStateToProps)(Navbar)
