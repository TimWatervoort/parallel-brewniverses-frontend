import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HomeChannelHead extends Component {
  render() {
    return(
      <div className='container galaxy-purple my-3 py-3 rounded'>
        <div className='row'>
          <div className='col'>
            <h3 className='brew-header text-center'>Your Brewniverses</h3>
          </div>
        </div>
        <div className='row pt-1'>
          <div className='col text-center'>
            <Link className='btn galaxy-indigo sub-button text-white' to='/all'>All Brewniverses</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeChannelHead
