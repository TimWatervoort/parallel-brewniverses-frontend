import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostPreview from '../PostPreview'
import HomeChannelHead from './HomeChannelHead'
import NoSubscriptions from './NoSubscriptions'

class HomeChannel extends Component {
  render(){
    const { posts, user } = this.props
    const toRender = posts.filter(x=>{
      for (var i = 0; i < x.tags.length; i++){
        return user.channels.includes(x.tags[i])
      }
    })
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
