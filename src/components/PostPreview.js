import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { upvote, downvote } from '../actions/index'
import { bindActionCreators } from 'redux'

class PostPreview extends Component {

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
    const { post } = this.props

    return (
      <div className='col-lg-6 col-md-12 mb-3'>
        <div className='card my-2 shadow h-100'>
          <div className='card-body pp-card-body '>
            <div className="row ">
              <div className="col-2 pl-2 pr-1 text-center">
                  <img className='pp-image' alt='Brew' src={post.picture}></img>
              </div>
              <div className="col-8 pl-3">
                <div>
                  <h5 className='card-title pp-title'>{post.title}</h5>
                  <h6 className="text-muted">Rating: {post.rating}/5</h6>
                  <hr></hr>
                </div>
              </div>
              <div className="col-2 px-0">
                <div className="float-right mr-3">
                  <i onClick={this.sendUpvote} className={`${localStorage.getItem(`upvoted${post.id}`) ? 'upvoted' : 'uparrow'} mr-2 fas fa-arrow-up`}></i>
                  {post.score}
                  <i onClick={this.sendDownvote} className={`${localStorage.getItem(`downvoted${post.id}`) ? 'downvoted' : 'downarrow'} ml-2 fas fa-arrow-down`}></i>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer pp-footer-tags bg-transparent border-white">
            {
              post.tags ? post.tags.map((x, i) => <Link className='badge badge-dark galaxy-lavender text-white p-2 mr-2 mb-1' to={`/brewniverse/${x.tag}`} key={i}>{x.tag}</Link>) : null
            }
          </div>
          <Link className='bg-light' to={`/post/${post.id}`}>
            <div className="card-footer pp-footer-view text-secondary bg-transparent">
              <i className="ml-2 mt-1 fas fa-arrow-right float-right"></i><span className="float-right">View</span>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = dispatch => bindActionCreators({
  upvote,
  downvote
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PostPreview);
