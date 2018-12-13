import React, { Component } from 'react'

class AwfulPost extends Component {

  constructor(props){
    super(props)
    this.sendUpvote = this.sendUpvote.bind(this)
    this.sendDownvote = this.sendDownvote.bind(this)
  }

  sendUpvote() {
    const { post, upvote } = this.props
    upvote(post.id, post.score)
  }

  sendDownvote() {
    const { post, downvote } = this.props
    downvote(post.id, post.score)
  }

  render() {
    const { post } = this.props;
    return(
      <div className='col-lg-6 col-md-12'>
        <div className='card my-2 bg-warning text-success border'>
          <div className='card-body'>
            <h5 className='card-title text-center'>{post.title}</h5>
            <hr></hr>
            <div className='text-center'>
              <img className='pp-image' alt='Brew' src={post.picture}></img>
            </div>

            <div className='container'>
            <div className='row text-center mt-3 post-bar'>
              <div className='col-4'>
                <p>
                  <i onClick={this.sendUpvote} className="uparrow mr-2 fas fa-arrow-up"></i>
                    {post.score}
                  <i onClick={this.sendDownvote} className="downarrow ml-2 fas fa-arrow-down"></i>
                </p>
              </div>
              <div className='col-4'>
                <p>Rating: {post.rating}/5</p>
              </div>
              <div className='col-4'>
                <Link className='btn galaxy-lavender text-white' to={`/post/${post.id}`}>View</Link>
              </div>
            </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default AwfulPost
