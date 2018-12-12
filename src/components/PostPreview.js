import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class PostPreview extends Component {
  render(){
    const { post } = this.props;
    return(
      <div className='col-lg-6 col-md-12'>
        <div className='card my-2 pp-card'>
          <div className='card-body'>
            <h5 className='card-title text-center'>{post.title}</h5>
            <hr></hr>
            <div className='text-center'>
              <img className='pp-image' alt='Brew' src={post.picture}></img>
            </div>

            <div className='container'>
            <div className='row text-center mt-3 post-bar'>
              <div className='col-4'>
                <p><i className="fas fa-arrow-up"></i> {post.score} <i className="fas fa-arrow-down"></i></p>
              </div>
              <div className='col-4'>
                <p>Rating: {post.rating}/5</p>
              </div>
              <div className='col-4'>
                <Link className='btn galaxy-lavender text-white' to={`/post/${post.id}`}>View</Link>
              </div>
            </div>
            </div>

            <div className='row text-center mt-2'>
              {post.tags ? post.tags.map((x,i) => <Link className='badge badge-dark galaxy-lavender text-white p-1 mx-1' to={`/brewniverse/${x}`} key={i}>{x}</Link>) : <div></div>}
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
