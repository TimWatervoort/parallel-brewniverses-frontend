import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'

class Navbar extends Component {

  state = {
    collapsed: true,
  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const { collapsed } = this.state
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show'
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right'

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/all">
          <img src={require('./Icon/pb_logo_alt.svg')} height="40" className="d-inline-block align-top ml-1" alt="" />
        </Link>
        <button onClick={this.toggleNavbar} className={`${classTwo}`} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-collapse">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`${classOne}`} id="nav-collapse">
          <div className="navbar-nav mr-auto mt-2 mt-lg-0">
            <Link className="btn mb-1 nav-link" to={Cookies.get('user_id') ? '/home' : '/all'}>{Cookies.get('user_id') ? 'My Brewniverses' : 'All Brewniverses'}</Link>
            <Link className="btn mb-1 nav-link" to={Cookies.get('user_id') ? '/addpost' : '/signup'}>{Cookies.get('user_id') ? 'New Review' : 'Sign Up'}</Link>
            <Link className="btn mb-1 nav-link" to={Cookies.get('user_id') ? '/user' : '/login'}>{Cookies.get('user_id') ? 'My Profile' : 'Log In'}</Link>
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  user: state.user
})

export default connect(mapStateToProps)(Navbar)
