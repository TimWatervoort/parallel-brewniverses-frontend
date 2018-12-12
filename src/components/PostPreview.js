import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostPreview extends Component {
  render(){
    const { post } = this.props;
    return(
      <div className='col-md-6 col-sm-12'>
        <div className='card my-2 pp-card'>
          <div className='card-body'>
            <h5 className='card-title text-center'>{post.title}</h5>
            <hr></hr>
            <div className='text-center'>
              <img className='pp-image' src={post.picture}></img>
            </div>
            <div className='row text-center mt-3'>
              <div className='col-6'>
                <p><i class="fas fa-arrow-up"></i> {post.score} <i class="fas fa-arrow-down"></i></p>
              </div>
              <div className='col-6'>
                <p>Rating: {post.rating}/5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(mapStateToProps)(PostPreview);
