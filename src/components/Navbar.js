import React, { Component } from 'react'
import { connect } from 'react-redux'

class Navbar extends Component {
  render(){
    return(
      <div>
        <nav className='navbar galaxy-lavender mb-0 pb-0'>
          <h5 className='mx-auto nav-title'>Parallel Brewniverses</h5>
        </nav>
        <div className='container-fluid galaxy-lavender mt-0 text-center'>
          <i className="fab fa-react nav-symbol mt-0 pb-2"></i>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts
})

export default connect(mapStateToProps)(Navbar)
