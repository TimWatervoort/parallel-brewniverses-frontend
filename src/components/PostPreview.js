import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostPreview extends Component {
  render(){
    const { posts } = this.props;
    return(
      <div className='card'>
        <div className='card-body'>
          <h4 className='card-title'>
          {posts.length > 0 ? posts[0].title : ''}</h4>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(mapStateToProps)(PostPreview);
