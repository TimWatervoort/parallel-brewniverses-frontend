import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostPreview from '../PostPreview'
import SingleChannelHead from './SingleChannelHead'

class SingleChannel extends Component {
  render(){
    const { posts, match } = this.props
    const tag = match.params.channel
    const toRender = posts.filter(x => {
      let xTags = x.tags.map(y => y.tag)
      return xTags.includes(tag)
    });
    return(
      <div>
      <SingleChannelHead tag={tag} length={toRender.length}/>
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
