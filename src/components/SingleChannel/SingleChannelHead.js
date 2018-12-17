import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addSubscription, removeSubscription } from '../../actions/users'
import { bindActionCreators } from 'redux'

class SingleChannelHead extends Component {

  sendSub = e => {
    const { addSubscription, removeSubscription, tag, user } = this.props
    const userChannels = user.channels.map(x => x.tag)
    if (userChannels.includes(tag)) {
      removeSubscription(tag, user.channels)
    } else {
      addSubscription(tag, user.channels)
    }
  }

  render() {
    const { tag, length, user } = this.props
    const firstLetter = tag.split('').slice(0, 1)
    const capitalLetter = firstLetter[0].toUpperCase()
    const capitalized = tag.replace(firstLetter[0], capitalLetter)

    let userChannels = []
    if (user.channels){
      userChannels = user.channels.map(x => x.tag)
    }

    return(
      <div className='container'>
        <div className='row mt-3'>
          <div className='col'>
            <h3 className='brew-header text-center header-text'>
              {length === 0 ? 'This brewniverse doesn\'t exist yet!' : `${capitalized} Brewniverse`} <span onClick={this.sendSub} className='btn sub-button galaxy-indigo'>{userChannels.includes(tag) ? <i class="fas fa-minus sub-button-icon"></i> : <i class="fas fa-plus sub-button-icon"></i>}</span></h3>

          </div>
        </div>

        <div className='row mb-3'>
          <div className='col text-center'>
            <Link className='btn galaxy-indigo sub-button text-white' to='/all'>All Brewniverses</Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addSubscription,
  removeSubscription
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SingleChannelHead)
