import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addUser } from '../../actions/index'

class Signup extends Component {

  constructor(props) {
    super(props)
    this.state={
      name: '',
      pass: '',
      confPass: '',
      email: '',
      image: '',
      passMatch: true
    }
  }

  setName = e => {
    this.setState({
      name: e.target.value
    })
  }

  setPass = e => {
    this.setState({
      pass: e.target.value
    })
  }

  setConfPass = e => {
    this.setState({
      confPass: e.target.value
    })
  }

  setEmail = e => {
    this.setState({
      email: e.target.value
    })
  }

  setImage = e => {
    this.setState({
      image: e.target.value
    })
  }

  sendSignup = e => {
    const { addUser } = this.props
    e.preventDefault()
    if (this.state.pass !== this.state.confPass) {
      this.setState({
        passMatch: false,
        pass: '',
        confPass: ''
      })
    } else {
      const newUser = {
        username: this.state.name,
        password: this.state.pass,
        email: this.state.email,
      }
      addUser(newUser)
      console.log(newUser)
      this.setState({
        name: '',
        pass: '',
        confPass: '',
        email: '',
        image: '',
        passMatch: true
      })
    }
  }

  render(){

    const passMatchError = <div className='row my-1'><div className='col'><h4 className='text-center text-warning'>Passwords do not match!</h4></div></div>

    return(
      <div className='container mt-3 text-white galaxy-purple'>
        <div className='row pt-4'>
          <div className='col'>
            <h3 className='text-center'>Sign Up</h3>
          </div>
        </div>
        <hr></hr>
        {this.state.passMatch ? <div></div> : passMatchError}
        <form onSubmit={this.sendSignup} className='p-4'>

          <div className='row'>
            <div className='col-4'>
              <h4>Email: </h4>
            </div>
            <div className='col-8'>
              <input onChange={this.setEmail} value={this.state.email} className='form-control' type='email' placeholder='Email'/>
            </div>
          </div>

          <div className='row mt-3'>
            <div className='col-4'>
              <h4>Username: </h4>
            </div>
            <div className='col-8'>
              <input onChange={this.setName} value={this.state.name} className='form-control' type='text' placeholder='Username'/>
            </div>
          </div>

          <div className='row mt-3'>
            <div className='col-4'>
              <h4>Password: </h4>
            </div>
            <div className='col-8'>
              <input onChange={this.setPass} value={this.state.pass} className='form-control' type='password' placeholder='Password'/>
            </div>
          </div>

          <div className='row mt-3'>
            <div className='col-4'>
              <h4>Confirm Password: </h4>
            </div>
            <div className='col-8'>
              <input onChange={this.setConfPass} value={this.state.confPass} className='form-control' type='password' placeholder='Password'/>
            </div>
          </div>

          <div className='row mt-3'>
            <div className='col-4'>
              <h4>Profile Picture: </h4>
            </div>
            <div className='col-8'>
              <input onChange={this.setImage} value={this.state.image} className='form-control' type='url' placeholder='Image URL'/>
            </div>
          </div>

          <div className='row'>
            <button className='mx-auto mt-3 btn text-white galaxy-indigo' type='submit'>GO!</button>
          </div>

        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addUser
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
