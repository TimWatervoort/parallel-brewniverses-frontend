import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions/index'
import { bindActionCreators } from 'redux'

class AddPostForm extends Component {

  constructor(props){
    super(props)
    this.state = {
      title: '',
      content: '',
      rating: 0,
      score: 0,
      picture: ''
    }
  }

  setTitle = e => {
    this.setState({
      title: e.target.value
    })
  }

  setContent = e => {
    this.setState({
      content: e.target.value
    })
  }

  setPicture = e => {
    this.setState({
      picture: e.target.value
    })
  }

  setRating = e => {
    this.setState({
      rating: e.target.value
    })
  }

  send = e => {
    e.preventDefault()
    const { addPost } = this.props
    addPost(this.state)
    this.setState({
      title: '',
      content: '',
      picture: '',
      rating: 0
    })
  }

  render(){
    return(
      <div className = 'container mt-3'>
        <form onSubmit={this.send}>
          <input type='text' value={this.state.title} onChange={this.setTitle} placeholder='title' />
          <input type='text' value={this.state.content} onChange={this.setContent} placeholder='content' />
          <input type='url' value={this.state.picture} onChange={this.setPicture} placeholder='picture' />
          <input type='number' value={this.state.rating} onChange={this.setRating} />
          <button type='submit' className=' m-1 btn galaxy-lavender'>Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addPost
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AddPostForm)
