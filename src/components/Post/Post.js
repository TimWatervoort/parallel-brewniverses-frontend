import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { upvote, downvote, deletePost, editPost } from '../../actions/index'
import { bindActionCreators } from 'redux'
import Cookies from 'js-cookie'

class Post extends Component {

  constructor(props) {
    super(props)
    this.sendUpvote = this.sendUpvote.bind(this)
    this.sendDownvote = this.sendDownvote.bind(this)
    this.startEdit = this.startEdit.bind(this)
    this.state = {
      title: '',
      content: '',
      rating: 0,
      picture: '',
      editOn: false,
      tags: ''
    }
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

  startEdit() {
    const { posts, match } = this.props
    const id = match.params.id
    const post = posts.filter(x => parseInt(x.id) === parseInt(id))[0]
    const tagArr = post.tags.map(x => x.tag)
    const tagStr = tagArr.join(', ')

    this.setState({
      editOn: true,
      title: post.title,
      rating: post.rating,
      content: post.content,
      picture: post.picture,
      tags: tagStr
    })

  }

  handleChange = e => {
    const key = e.target.name
    this.setState({
      [key]: e.target.value
    })
  }

  submitEdits = e => {
    e.preventDefault()
    const { editPost, match } = this.props
    const id = match.params.id
    const newTags = this.state.tags.split(',')
    const trimmedTags = newTags.map(x=>x.trim())
    const edits = {
      title: this.state.title,
      rating: this.state.rating,
      content: this.state.content,
      picture: this.state.picture,
      tags: trimmedTags
    }
    editPost(id, edits)
    this.setState({
      editOn: false
    })
  }

  render(){
    const { posts, match } = this.props
    const id = match.params.id


    let post;
    if (posts.length > 0) {
      post = posts.filter(x => parseInt(x.id) === parseInt(id))[0]
    } else {
      post = {title: '', content: '', picture: '', rating: 0, score: 0, author: ''}
    }

    const titleEdit = <input name='title' type='text' className='form-control' value={this.state.title} onChange={this.handleChange}/>

    const ratingEdit = <input name='rating' type='number' className='form-control' value={this.state.rating} onChange={this.handleChange}/>

    const contentEdit = <textarea name='content' className='form-control' value={this.state.content} onChange={this.handleChange}/>

    const pictureEdit = <input name='picture' className='mt-2 form-control' value={this.state.picture} onChange={this.handleChange}/>

    const tagsEdit = <input name='tags' className='form-control' value={this.state.tags} onChange={this.handleChange}/>

    const submitButton = <button type='submit' className='btn galaxy-indigo text-white sub-button' onClick={this.submitEdits}>Submit</button>

    const editButton = <button onClick={this.startEdit} className='btn galaxy-indigo sub-button text-white'>Edit</button>

    let authorized = parseInt(Cookies.get('user_id')) === parseInt(post.authorId)

    return(
      <div className='container mb-2 mt-3 rounded bg-light'>
        <div className='row pt-3'>

          <div className='col-6'>
            {this.state.editOn ? titleEdit : <h3>{post.title}</h3>}
          </div>

          <div className='col-4'>
            {this.state.editOn ? ratingEdit : <h3>Rating: {post.rating}/5</h3>}
          </div>

          {authorized ? <div className='col-2'>{this.state.editOn ? submitButton : editButton}</div> : <div></div>}

        </div>

        <hr></hr>

        <div className='row pb-3'>
          <div className='col-6 text-center'>
            <img src={post.picture} alt='Brew' className='img-fluid' style={{ borderRadius: '.25em' }}/>
            {this.state.editOn ? pictureEdit : <div></div>}
          </div>
          <div className='col-6'>
            {this.state.editOn ? contentEdit : <p>{post.content}</p>}
          </div>
        </div>

        <hr></hr>

        <div className='row pb-2'>
          <div className='col-6'>
            <h5>Reviewed by <Link to={`/users/${post.authorId}`} className='text-black'>{post.author}</Link></h5>
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
              {post.tags ? post.tags.map((x,i) => <Link className='badge badge-dark galaxy-indigo text-white p-2 mr-1 mb-1' to={`/brewniverse/${x.tag}`} key={i}>{x.tag}</Link>) : <div></div>}
          </div>
        </div>

        <div className='row pb-2'>
          <div className='col'>
            {this.state.editOn ? tagsEdit : <div></div>}
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
  deletePost,
  editPost
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Post)
