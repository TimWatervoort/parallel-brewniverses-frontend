import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class AllChannelHead extends Component {

  constructor(props) {
    super(props)
    this.state = {
      fieldOn: false,
      value: ''
    }
  }

  spawnField = e => {
    this.setState({
      fieldOn: true
    })
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  render() {

    const { value } = this.state

    return(
      <div className='container-fluid header-bg'>
        <div className='row pt-3'>
          <div className='col'>
            <h3 className='brew-header text-center header-text'><span onClick={this.spawnField}>A</span>ll <span className="fas fa-satellite text-white"></span> Brewniverses</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <p className='brew-header text-center'>Click on tags to visit Brewniverses!</p>
          </div>
        </div>

        <div className='row'>
          <div className='col text-center'>
            {this.state.fieldOn ? <input onChange={this.handleChange} value={this.state.value} className='my-1' type='text' /> : null}
          </div>
        </div>

        <div>
          {value.toLowerCase() === 'my experience is too pleasant' ? <Redirect to='/awful' /> : null }
        </div>

      </div>
    )
  }
}

export default AllChannelHead
