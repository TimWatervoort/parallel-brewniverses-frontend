import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostPreview from '../PostPreview'
import HomeChannelHead from './HomeChannelHead'
import NoSubscriptions from './NoSubscriptions'

class HomeChannel extends Component {
  render(){
    const { posts, user } = this.props
    let toRender = [];

    if (user.channels && posts[0].tags) {
      const userChannels = user.channels.map(x => x.tag)

      for (let i = 0; i < posts.length; i++){
        for (let j = 0; j < posts[i].tags.length; j++){
          if (userChannels.includes(posts[i].tags[j])) {
            toRender.push(posts[i])
            break
          }
        }
      }
    }

    return(
      <div>
      <HomeChannelHead />
        <div className='container'>
          <div className='row'>
            {toRender.length > 0 ? toRender.map(x => <PostPreview key={x.id} post={x} />) : <NoSubscriptions />}
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

export default connect(mapStateToProps)(HomeChannel)
