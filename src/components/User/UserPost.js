import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class UserPost extends Component {
  render(){

    const { post } = this.props

    return(
      <li className="list-group-item galaxy-purple text-white">
        <div className='row'>
          <div className='col-9'>
            <h5>{post.title}</h5>
          </div>
          <div className='col-3'>
            <Link className='btn sub-button galaxy-indigo text-white mr-2' to={`/post/${post.id}`}>View</Link>
          </div>
        </div>
      </li>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  user: state.user
})

export default connect(mapStateToProps)(UserPost)
