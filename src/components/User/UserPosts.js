import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserPost from './UserPost'

class UserPosts extends Component {

  render() {

    const { user } = this.props
    let userPostList = []
    if (user.posts) {
      userPostList = user.posts.map((post, i) => <UserPost key={i} post={post}/>)
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
