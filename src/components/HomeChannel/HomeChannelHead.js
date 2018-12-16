import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HomeChannelHead extends Component {
  render() {
    return(
      <div className='container'>
        <div className='row pt-3'>
          <div className='col'>
            <h3 className='brew-header text-center header-text'>Your <span className="fas fa-user-astronaut"></span> Brewniverses</h3>
          </div>
        </div>
        <div className='row pt-1'>
          <div className='col text-center'>
            <Link className='btn galaxy-indigo sub-button text-white mb-3' to='/all'>All Brewniverses</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeChannelHead
