import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class HomeChannelHead extends Component {
  render() {

    const { user } = this.props
    let userChannels = [];
    if (user.channels) {
      userChannels = user.channels.map(x => x.tag)
    }

    return(
      <div className='container'>
        <div className='row pt-3'>
          <div className='col'>
            <h3 className='brew-header text-center header-text'>Your <span className="fas fa-user-astronaut"></span> Brewniverses</h3>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-12 text-center">
            {userChannels.map((x,i) => <Link to={`/brewniverse/${x}`}className='badge badge-dark galaxy-indigo p-2 mx-1' key={i}>{x}</Link>)}
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

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(HomeChannelHead)
