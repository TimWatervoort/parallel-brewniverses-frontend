import React, { Component } from 'react'
import { connect } from 'react-redux'

class Post extends Component {
  render(){
    const { posts, match } = this.props
    const id = match.params.id
    const post = posts.filter(x => parseInt(x.id) === parseInt(id))[0]
    return(
      <div className='galaxy-purple container mt-3'>
        <div className='row'>
          <div className='col-6'>
            <h3>{post.title}</h3>
          </div>
          <div className='col-6'>
            <h3>{post.rating}</h3>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts
})

export default connect(mapStateToProps)(Post)
