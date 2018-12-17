import React, { Component } from 'react'
import { connect } from 'react-redux'
import OtherUserPost from './UserPost'

class OtherUserPosts extends Component {

  render() {

    const { id, posts } = this.props

    const postsToUse = posts.filter(x => x.authorId === id)
    const userPostList = postsToUse.map((post, i) => <OtherUserPost key={i} post={post}/>)

    return (
      <div className="row my-3">
        <div className="col-12">
          <div className="card bg-light">
            <h3 className="py-3 px-3 bg-light">Posts</h3>
            <ul className="list-group bg-light pb-3 px-3">
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
})

export default connect(mapStateToProps)(OtherUserPosts)
