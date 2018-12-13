import React, { Component } from 'react'
import { connect } from 'react-redux'

class Signup extends Component {

  constructor(props) {
    
  }

  render(){
    return(
      <div className='container mt-3 text-white galaxy-purple'>
        <div className='row pt-4'>
          <div className='col'>
            <h3 className='text-center'>Sign Up</h3>
          </div>
        </div>
        <hr></hr>
        <form className='p-4'>

          <div className='row'>
            <div className='col-4'>
              <h4 className='text-center'>Email: </h4>
            </div>
            <div className='col-8'>
              <input className='form-control' type='email' placeholder='Email'/>
            </div>
          </div>

          <div className='row mt-3'>
            <div className='col-4'>
              <h4 className='text-center'>Username: </h4>
            </div>
            <div className='col-8'>
              <input className='form-control' type='text' placeholder='Username'/>
            </div>
          </div>

          <div className='row mt-3'>
            <div className='col-4'>
              <h4 className='text-center'>Password: </h4>
            </div>
            <div className='col-8'>
              <input className='form-control' type='password' placeholder='Password'/>
            </div>
          </div>

          <div className='row mt-3'>
            <div className='col-4'>
              <h4 className='text-center'>Confirm Password: </h4>
            </div>
            <div className='col-8'>
              <input className='form-control' type='password' placeholder='Password'/>
            </div>
          </div>

          <div className='row mt-3'>
            <div className='col-4'>
              <h4 className='text-center'>Profile Picture: </h4>
            </div>
            <div className='col-8'>
              <input className='form-control' type='url' placeholder='Image URL'/>
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

export default connect(mapStateToProps)(Signup)
