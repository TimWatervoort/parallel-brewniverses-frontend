import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render(){

    const loggedIn = true

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
              <Link className="btn galaxy-lavender text-gpink mb-1" to={loggedIn ? '/home' : '/all'}>{loggedIn ? 'My Brewniverses' : 'All Brewniverses'}</Link>
            </div>
            <div className='col'>
              <Link className="btn galaxy-lavender text-gpink mb-1" to={loggedIn ? '/addpost' : '/signup'}>{loggedIn ? 'New Review' : 'Sign Up'}</Link>
            </div>
            <div className='col'>
              <Link className="btn galaxy-lavender text-gpink mb-1" to={loggedIn ? '/userhome' : '/login'}>{loggedIn ? 'My Profile' : 'Log In'}</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts
})

export default connect(mapStateToProps)(Navbar)
