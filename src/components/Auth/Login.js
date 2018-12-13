import React, { Component } from 'react'
import { connect } from 'react-redux'

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
    console.log(info);
    this.setState({
      name: '',
      pass: ''
    })
  }

  render(){
    return(
      <div className='container mt-3 text-white galaxy-purple'>
        <div className='row pt-4'>
          <div className='col'>
            <h3 className='text-center'>Login</h3>
          </div>
        </div>
        <hr></hr>
        <form onSubmit={this.sendLogin} className='p-4'>

          <div className='row'>
            <div className='col-4'>
              <h4 className='text-center'>Username: </h4>
            </div>
            <div className='col-8'>
              <input className='form-control' required onChange={this.setName} value={this.state.name} type='text' placeholder='Username'/>
            </div>
          </div>

          <div className='row mt-3'>
            <div className='col-4'>
              <h4 className='text-center'>Password: </h4>
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
  users: state.users
})

export default connect(mapStateToProps)(Login)
