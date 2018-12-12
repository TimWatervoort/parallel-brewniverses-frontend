import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostPreview from '../PostPreview'
import SingleChannelHead from './SingleChannelHead'

class SingleChannel extends Component {
  render(){
    const { posts, match } = this.props
    const tag = match.params.channel
    const toRender = posts.filter(x => x.tags.includes(tag));
    return(
      <div>
      <SingleChannelHead tag={tag}/>
        <div className='container'>
          <div className='row'>
            {toRender.length > 0 ? toRender.map(x => <PostPreview key={x.id} post={x} />) : <div></div>}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts
})

export default connect(mapStateToProps)(SingleChannel)
