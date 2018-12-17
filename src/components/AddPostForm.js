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
      channels: '',
      submitted: false
    }
  }

  handleChange = e => {
    const key = e.target.name
    this.setState({
      [key]: e.target.value
    })
  }

  send = e => {
    e.preventDefault()
    const { addPost } = this.props
    const channelArray = this.state.channels.split(',')
    const trimmedArray = channelArray.map(x => ({ tag: x.trim() }))
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
      channels: '',
      submitted: true
    })
  }

  render(){
    return(
      <div className = 'container mt-3'>
        <div className='card bg-light'>
          <div className='card-body'>
            <div className='row my-1'>
              <h3 className='mx-auto header-text' style={{ fontSize: '2em' }}>New Review</h3>
            </div>
            <div className='row my-1'>
              {this.state.submitted ? <h4 className='mx-auto text-success'>Review posted!</h4> : <div></div>}
            </div>
            <hr></hr>
          <form onSubmit={this.send}>

            <div className='row my-1'>
                <div className='col-3'><h4 className="form-title">Title:</h4></div>
              <div className='col-9'>
                  <input autoComplete='off' name='title' type='text' className='form-control' value={this.state.title} onChange={this.handleChange} placeholder='Include the name of the beverage...' required={true}/>
              </div>
            </div>

            <div className='row my-1'>
                <div className='col-3'><h4 className="form-title">Image Url: </h4></div>
            <div className='col-9'>
              <input autoComplete='off' name='picture' type='url' className='form-control' value={this.state.picture} onChange={this.handleChange} placeholder='Link to an image...' required={true}/>
            </div>
            </div>

            <div className='row my-1'>
                <div className='col-3'><h4 className="form-title">Rating out of 5: </h4></div>
            <div className='col-9'>
              <input autoComplete='off' name='rating' max={5} min={0} type='number' className='form-control' value={this.state.rating} onChange={this.handleChange} />
            </div>
            </div>

            <div className='row my-1'>
                <div className='col-3'><h4 className="form-title">Your review: </h4></div>
            <div className='col-9'>
                  <textarea autoComplete='off' name='content' type='text' className='form-control' value={this.state.content} onChange={this.handleChange} placeholder='Give us your opinion...' required={true}/>
            </div>
            </div>

            <div className='row my-1'>
                <div className='col-3'><h4 className="form-title">Brewniverses: </h4></div>
            <div className='col-9'>
                  <input autoComplete='off' name='channels' type='text' className='form-control' value={this.state.channels} onChange={this.handleChange} placeholder='Separate brewniverses with commas...' required={true}/>
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
