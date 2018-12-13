import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'

class Navbar extends Component {
  render(){

    return(
      <div>
        <nav className='navbar galaxy-lavender mb-0 pb-0'>
          <Link className='mx-auto text-gpink nav-title' to='/all'>Parallel Brewniverses</Link>
        </nav>
        <div className='container-fluid galaxy-lavender mt-0 text-center'>
          <Link className="fab fa-react nav-symbol mt-2" to='/all'></Link>
        </div>
        <div className='container-fluid galaxy-lavender mt-0 text-center'>
          <div className='row'>
            <div className='col'>
              <Link className="btn galaxy-lavender text-gpink mb-1" to={Cookies.get('name') ? '/home' : '/all'}>{Cookies.get('name') ? 'My Brewniverses' : 'All Brewniverses'}</Link>
            </div>
            <div className='col'>
              <Link className="btn galaxy-lavender text-gpink mb-1" to={Cookies.get('name') ? '/addpost' : '/signup'}>{Cookies.get('name') ? 'New Review' : 'Sign Up'}</Link>
            </div>
            <div className='col'>
              <Link className="btn galaxy-lavender text-gpink mb-1" to={Cookies.get('name') ? '/user' : '/login'}>{Cookies.get('name') ? 'My Profile' : 'Log In'}</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  user: state.user
})

export default connect(mapStateToProps)(Navbar)
