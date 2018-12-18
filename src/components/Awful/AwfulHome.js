import React, { Component } from 'react'
import AwfulPost from './AwfulPost'
import { connect } from 'react-redux'
import HomeChannelHead from '../HomeChannel/HomeChannelHead'

class AwfulHome extends Component {
  render(){

    const { posts } = this.props

    const awfulObj = {
      title: 'Dishwasher Detergent',
      rating: 5,
      content: 'Absolutely delicious.',
      score: 100,
      author: 'Gary Busey',
      picture: 'https://target.scene7.com/is/image/Target/GUEST_2202ab72-af05-433d-97b1-50af69a9b935?wid=488&hei=488&fmt=pjpeg',
      author_id: 9,
      tags: ['french', 'cuisine', 'fine dining', 'lovely'],
      id: 1
    }

    return(
        <div>
        <HomeChannelHead />
          <div className='container'>
            <div className='row'>
              {posts.length > 0 ? posts.map((x,i) => <AwfulPost key={i} post={awfulObj} />) : <div></div>}
            </div>
          </div>
        </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts
})

export default connect(mapStateToProps)(AwfulHome)
