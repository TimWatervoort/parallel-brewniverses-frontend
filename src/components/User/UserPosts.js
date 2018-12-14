import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserPosts extends Component {

  render() {

    const { user } = this.props
    let userPostList = []
    if (user.posts) {
      userPostList = user.posts.map((post, i) => <li key={i} className="list-group-item galaxy-purple text-white"> <h5>{post.title}</h5></li>)
    }

    return (
      <div className="row my-3">
        <div className="col-12">
          <div className="galaxy-purple rounded">
            <h3 className="py-3 px-3 galaxy-purple text-white">Posts</h3>
            <ul className="list-group galaxy-purple pb-3 px-3">
              {userPostList.length > 0 ? userPostList : <div></div>}
            </ul>
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

export default connect(mapStateToProps)(UserPosts)
