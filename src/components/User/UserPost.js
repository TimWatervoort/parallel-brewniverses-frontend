import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../../actions/index'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

class UserPost extends Component {

  sendDelete = e => {
    const { deletePost, post } = this.props
    deletePost(post.id)
  }

  render(){

    const { post } = this.props

    return(
      <li className="list-group-item galaxy-purple text-white">
        <div className='row'>
          <div className='col-6'>
            <h5>{post.title}</h5>
          </div>
          <div className='col-3'>
            <Link className='btn sub-button galaxy-indigo text-white mr-2' to={`/post/${post.id}`}>View</Link>
          </div>
          <div className='col-3'>
            <button className='galaxy-indigo text-white btn sub-button' onClick={this.sendDelete}>Delete</button>
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

const mapDispatchToProps = dispatch => bindActionCreators({
  deletePost
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UserPost)
