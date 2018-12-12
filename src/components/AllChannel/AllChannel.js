import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostPreview from '../PostPreview'
import AllChannelHead from './AllChannelHead'

class AllChannel extends Component {
  render(){
    const { posts } = this.props
    return(
      <div>
      <AllChannelHead />
        <div className='container'>
          <div className='row'>
            {posts.length > 0 ? posts.map(x => <PostPreview key={x.id} post={x} />) : <div></div>}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts
})

export default connect(mapStateToProps)(AllChannel)
