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
      passMatch: true,
      nameTaken: false,
      signedUp: false
    }
  }

  handleChange = e => {
    const key = e.target.name
    const value = e.target.value.replace(/\s/g, '')
    this.setState({
      [key]: value
    })
  }

  checkFields = e => {
    e.preventDefault()

    const { users } = this.props
    const userNames = users.map(x => x.username)

    if (this.state.pass !== this.state.confPass) {
      this.setState({
        passMatch: false,
        nameTaken: false,
        pass: '',
        confPass: ''
      })
    } else if (userNames.includes(this.state.name)){
      this.setState({
        passMatch: true,
        nameTaken: true,
        name: ''
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
      }
      addUser(newUser)
      this.setState({
        name: '',
        pass: '',
        confPass: '',
        email: '',
        passMatch: true,
        nameTaken: false,
        signedUp: true
      })
  }

  render(){

    const { errors, success } = this.props

    const passMatchError = <div className='row my-1'><div className='col'><h4 className='text-center text-warning'>Passwords do not match!</h4></div></div>

    const userNameTaken = <div className='row my-1'><div className='col'><h4 className='text-center text-warning'>Username already exists!</h4></div></div>

    return(
      <div className='container mt-3 bg-light rounded'>
        {Cookies.get('user_id') ? <Redirect to='/' /> : <div></div>}
        <div className='row pt-4'>
          <div className='col'>
            <h3 className='text-center header-text' style={{ fontSize: "2em" }}>Sign Up</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            {errors === 'signup-error' ? <h5 className='text-center text-danger'>Error creating account. Please try again.</h5> : null}
          </div>
        </div>
        <hr></hr>

        {this.state.passMatch ? <div></div> : passMatchError}
        {this.state.nameTaken ? userNameTaken : <div></div>}
        {success === 'add_user_success' ? <Redirect to='/login' /> : <div></div>}

        <form onSubmit={this.checkFields} className='p-4'>

          <div className='row'>
            <div className='col-4'>
              <h4 className="form-title">Email: </h4>
            </div>
            <div className='col-8'>
              <input onChange={this.handleChange} autoComplete='off' name='email' required value={this.state.email} className='form-control' type='email' placeholder='Email'/>
            </div>
          </div>

          <div className='row mt-3'>
            <div className='col-4'>
              <h4 className="form-title">Username: </h4>
            </div>
            <div className='col-8'>
              <input onChange={this.handleChange} pattern="\S+" autoComplete='off' name='name' required value={this.state.name} className='form-control' type='text' placeholder='Username'/>
            </div>
          </div>

          <div className='row mt-3'>
            <div className='col-4'>
              <h4 className="form-title">Password: </h4>
            </div>
            <div className='col-8'>
              <input onChange={this.handleChange} autoComplete='off' name='pass' required value={this.state.pass} className='form-control' type='password' placeholder='Password'/>
            </div>
          </div>

          <div className='row mt-3'>
            <div className='col-4'>
              <h4 className="form-title">Confirm Password: </h4>
            </div>
            <div className='col-8'>
              <input onChange={this.handleChange} autoComplete='off' name='confPass' required value={this.state.confPass} className='form-control' type='password' placeholder='Password'/>
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
  users: state.users,
  errors: state.errors,
  success: state.success
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addUser
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
