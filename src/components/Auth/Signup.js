import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addUser } from '../../actions/users'
import { Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'

class Signup extends Component {

  constructor(props) {
    super(props)
    this.state={
      name: '',
      pass: '',
      confPass: '',
      email: '',
      image: '',
      passMatch: true,
      nameTaken: false,
      emailTaken: false,
      signedUp: false
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

  checkFields = e => {
    e.preventDefault()

    if (this.state.pass !== this.state.confPass) {
      this.setState({
        passMatch: false,
        emailTaken: false,
        nameTaken: false,
        pass: '',
        confPass: ''
      })
    } else {
      this.sendSignup()
    }

  }

  sendSignup = e => {
    const { addUser } = this.props
      const newUser = {
        username: this.state.name,
        password: this.state.pass,
        email: this.state.email,
        picture: this.state.image
      }
      addUser(newUser)
      this.setState({
        name: '',
        pass: '',
        confPass: '',
        email: '',
        image: '',
        passMatch: true,
        emailTaken: false,
        nameTaken: false,
        signedUp: true
      })
  }

  render(){

    const passMatchError = <div className='row my-1'><div className='col'><h4 className='text-center text-warning'>Passwords do not match!</h4></div></div>

    const userNameTaken = <div className='row my-1'><div className='col'><h4 className='text-center text-warning'>Username already exists!</h4></div></div>

    const userEmailTaken = <div className='row my-1'><div className='col'><h4 className='text-center text-warning'>An account already exists with this email!</h4></div></div>

    const success = <div className='row my-1'><div className='col'><h4 className='text-center text-white'>Welcome to Parallel Brewniverses!</h4></div></div>

    return(
      <div className='container mt-3 text-white galaxy-purple'>
        {Cookies.get('name') ? <Redirect to='/' /> : <div></div>}
        <div className='row pt-4'>
          <div className='col'>
            <h3 className='text-center'>Sign Up</h3>
          </div>
        </div>
        <hr></hr>

        {this.state.passMatch ? <div></div> : passMatchError}
        {this.state.nameTaken ? userNameTaken : <div></div>}
        {this.state.emailTaken ? userEmailTaken : <div></div>}
        {this.state.signedUp ? success : <div></div>}

        <form onSubmit={this.checkFields} className='p-4'>

          <div className='row'>
            <div className='col-4'>
              <h4>Email: </h4>
            </div>
            <div className='col-8'>
              <input onChange={this.setEmail} required value={this.state.email} className='form-control' type='email' placeholder='Email'/>
            </div>
          </div>

          <div className='row mt-3'>
            <div className='col-4'>
              <h4>Username: </h4>
            </div>
            <div className='col-8'>
              <input onChange={this.setName} required value={this.state.name} className='form-control' type='text' placeholder='Username'/>
            </div>
          </div>

          <div className='row mt-3'>
            <div className='col-4'>
              <h4>Password: </h4>
            </div>
            <div className='col-8'>
              <input onChange={this.setPass} required value={this.state.pass} className='form-control' type='password' placeholder='Password'/>
            </div>
          </div>

          <div className='row mt-3'>
            <div className='col-4'>
              <h4>Confirm Password: </h4>
            </div>
            <div className='col-8'>
              <input onChange={this.setConfPass} required value={this.state.confPass} className='form-control' type='password' placeholder='Password'/>
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
  posts: state.posts,
  users: state.users
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addUser
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
