import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userLogin } from '../../actions/users'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'

class Login extends Component {

  constructor(props){
    super(props)
    this.state= {
      name: '',
      pass: ''
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

  sendLogin = e => {
    e.preventDefault()
    const info = {
      username: this.state.name,
      password: this.state.pass
    }
    const { userLogin } = this.props
    userLogin(info)
    this.setState({
      name: '',
      pass: ''
    })
  }



  render(){

    const { errors } = this.props

    return(
      <div className='container mt-3 bg-light rounded'>

        {Cookies.get('user_id') ? <Redirect to='/' /> : <div></div>}

        <div className='row pt-4'>
          <div className='col'>
            <h3 className='text-center header-text' style={{ fontSize: "2em" }}>Login</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            {errors === 'login-error' ? <h5 className='text-center text-danger'>Invalid credentials!</h5> : null}
          </div>
        </div>
        <hr></hr>
        <form onSubmit={this.sendLogin} className='p-4'>

          <div className='row'>
            <div className='col-4'>
              <h4 className='text-center form-title'>Username: </h4>
            </div>
            <div className='col-8'>
              <input className='form-control' required onChange={this.setName} value={this.state.name} type='text' placeholder='Username'/>
            </div>
          </div>

          <div className='row mt-3'>
            <div className='col-4'>
              <h4 className='text-center form-title'>Password: </h4>
            </div>
            <div className='col-8'>
              <input className='form-control' required onChange={this.setPass} value={this.state.pass} type='password' placeholder='Password'/>
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
  user: state.user,
  errors: state.errors
})

const mapDispatchToProps = dispatch => bindActionCreators({
  userLogin
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)
