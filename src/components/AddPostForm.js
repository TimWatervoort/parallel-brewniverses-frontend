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
      picture: '',
      channels: ''
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

  setChannels = e => {
    this.setState({
      channels: e.target.value
    })
  }

  send = e => {
    e.preventDefault()
    const { addPost } = this.props
    const channelArray = this.state.channels.split(',')
    const trimmedArray = channelArray.map(x => x.trim())
    const newPost = {
      title: this.state.title,
      content: this.state.content,
      rating: this.state.rating,
      score: 0,
      picture: this.state.picture,
      tags: trimmedArray
    }
    addPost(newPost)
    this.setState({
      title: '',
      content: '',
      picture: '',
      rating: 0,
      channels: ''
    })
  }

  render(){
    return(
      <div className = 'container mt-3 text-white'>
        <div className='card galaxy-purple'>
          <div className='card-body'>
            <div className='row my-1'>
              <h3 className='mx-auto'>New Review</h3>
            </div>
            <hr></hr>
          <form onSubmit={this.send}>

            <div className='row my-1'>
              <div className='col-3'><h5>Title:</h5></div>
              <div className='col-9'>
                  <input type='text' className='form-control' value={this.state.title} onChange={this.setTitle} placeholder='Include the name of the beverage...' required={true}/>
              </div>
            </div>

            <div className='row my-1'>
            <div className='col-3'><h5>Image Url: </h5></div>
            <div className='col-9'>
              <input type='url' className='form-control' value={this.state.picture} onChange={this.setPicture} placeholder='Link to an image...' required={true}/>
            </div>
            </div>

            <div className='row my-1'>
            <div className='col-3'><h5>Rating out of 5: </h5></div>
            <div className='col-9'>
              <input max={5} min={0} type='number' className='form-control' value={this.state.rating} onChange={this.setRating} />
            </div>
            </div>

            <div className='row my-1'>
            <div className='col-3'><h5>Your review: </h5></div>
            <div className='col-9'>
                  <textarea type='text' className='form-control' value={this.state.content} onChange={this.setContent} placeholder='Give us your opinion...' required={true}/>
            </div>
            </div>

            <div className='row my-1'>
            <div className='col-3'><h5>Brewniverses: </h5></div>
            <div className='col-9'>
                  <input type='text' className='form-control' value={this.state.channels} onChange={this.setChannels} placeholder='Separate brewniverses with commas...' required={true}/>
            </div>
            </div>

            <div className='row my-1'>
              <button type='submit' className=' m-1 mx-auto btn text-white galaxy-lavender'>Submit</button>
            </div>

          </form>
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
  addPost
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AddPostForm)
