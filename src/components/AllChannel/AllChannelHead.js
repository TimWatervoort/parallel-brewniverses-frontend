import React, { Component } from 'react';

class AllChannelHead extends Component {
  render() {
    return(
      <div className='container galaxy-purple my-3 rounded'>
        <div className='row pt-3'>
          <div className='col'>
            <h3 className='brew-header text-center'>All Brewniverses</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <p className='brew-header text-center'>Click on tags to visit Brewniverses!</p>
          </div>
        </div>
      </div>
    )
  }
}

export default AllChannelHead
