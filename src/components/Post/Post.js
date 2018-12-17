import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { upvote, downvote, deletePost } from '../../actions/index'
import { bindActionCreators } from 'redux'

class Post extends Component {

  constructor(props) {
    super(props)
    this.sendUpvote = this.sendUpvote.bind(this)
    this.sendDownvote = this.sendDownvote.bind(this)
  }

  sendUpvote() {
    const { posts, match, upvote } = this.props
    const id = match.params.id
    const post = posts.filter(x => parseInt(x.id) === parseInt(id))[0]

    upvote(id, post.score)
  }

  sendDownvote() {
    const { posts, match, downvote } = this.props
    const id = match.params.id
    const post = posts.filter(x => parseInt(x.id) === parseInt(id))[0]

    downvote(id, post.score)
  }

  render(){
    const { posts, match } = this.props
    const id = match.params.id
    const post = posts.filter(x => parseInt(x.id) === parseInt(id))[0]

    return(
      <div className='container mb-2 mt-3 rounded bg-light'>
        <div className='row pt-3'>

          <div className='col-6'>
            <h3>{post.title}</h3>
          </div>

          <div className='col-6'>
            <h3>Rating: {post.rating}/5</h3>
          </div>

        </div>

        <hr></hr>

        <div className='row pb-3'>
          <div className='col-6 text-center'>
            <img src={post.picture} alt='Brew' className='img-fluid'/>
          </div>
          <div className='col-6'>
            <p>{post.content}</p>
          </div>
        </div>

        <hr></hr>

        <div className='row pb-2'>
          <div className='col-6'>
            <h4>{post.author}</h4>
          </div>
          <div className='col-6'>
            <h4>
              <i onClick={this.sendUpvote} className="mr-2 uparrow fas fa-arrow-up"></i>
              {post.score}
              <i onClick={this.sendDownvote} className="ml-2 downarrow fas fa-arrow-down"></i>
            </h4>
          </div>
        </div>

        <div className='row pb-2'>
          <div className='col pb-2'>
              {post.tags ? post.tags.map((x,i) => <Link className='badge badge-dark galaxy-indigo text-white p-2 mx-1' to={`/brewniverse/${x}`} key={i}>{x}</Link>) : <div></div>}
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
  upvote,
  downvote,
  deletePost
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Post)
