import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sortByPopular, getPosts, sortByOldest } from '../../actions/index'
import { bindActionCreators } from 'redux'
import PostPreview from '../PostPreview'
import AllChannelHead from './AllChannelHead'

class AllChannel extends Component {

  sortByName = e => {
    const { sortByPopular, getPosts, sortByOldest } = this.props
    switch(e.target.name) {
      case 'popular':
        sortByPopular()
        break
      case 'id':
        getPosts()
        break
      case 'old':
        sortByOldest()
        break
      default:
        console.log(e.target.name)
        break
    }
  }

  render(){
    const { posts } = this.props
    return(
      <div>
      <AllChannelHead />
        <div className='container'>
          <div className='row'>
            <div className='col text-center'>
              <h5 className='text-white'>Sort by:</h5>
            </div>
          </div>

          <div className='row'>
            <div className='col text-center'>
              <button name='popular' onClick={this.sortByName} className='btn mr-2 mb-2 galaxy-indigo sub-button text-white'>Popular</button>
              <button name='id' onClick={this.sortByName} className='btn mx-2 mb-2 galaxy-indigo sub-button text-white'>Newest</button>
              <button name='old' onClick={this.sortByName} className='btn ml-2 mb-2 galaxy-indigo sub-button text-white'>Oldest</button>
            </div>
          </div>

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

const mapDispatchToProps = dispatch => bindActionCreators({
  sortByPopular,
  getPosts,
  sortByOldest
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AllChannel)
