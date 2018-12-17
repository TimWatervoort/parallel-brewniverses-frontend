import React, { Component } from 'react';

class NoSubscriptions extends Component {
  render() {
    return(
      <div className='container my-3 py-3 rounded border border-white'>
        <div className='row'>
          <div className='col'>
            <h3 className='brew-header text-center'>No Subscriptions Yet!</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <h5 className='text-white text-center'>Explore 'All Brewniverses' to add some.</h5>
          </div>
        </div>
      </div>
    )
  }
}

export default NoSubscriptions
