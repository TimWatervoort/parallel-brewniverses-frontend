import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addSubscription, removeSubscription } from '../../actions/users'
import { bindActionCreators } from 'redux'

class SingleChannelHead extends Component {

  sendSub = e => {
    const { addSubscription, removeSubscription, tag, user } = this.props
    if (user.channels.includes(tag)) {
      removeSubscription(tag)
    } else {
      addSubscription(tag)
    }
  }

  render() {
    const { tag, length, user } = this.props
    const firstLetter = tag.split('').slice(0, 1)
    const capitalLetter = firstLetter[0].toUpperCase()
    const capitalized = tag.replace(firstLetter[0], capitalLetter)

    return(
      <div className='container galaxy-purple my-3 py-3 rounded'>
        <div className='row'>
          <div className='col'>
            <h3 className='brew-header text-center'>
            {length === 0 ? 'This brewniverse doesn\'t exist yet!' : `${capitalized} Brewniverse`} <span onClick={this.sendSub} className='badge badge-dark sub-button galaxy-indigo px-1 py-0'>{user.channels.includes(tag) ? '-' : '+'}</span></h3>

          </div>
        </div>

        <div className='row pt-1'>
          <div className='col text-center'>
            <Link className='btn galaxy-indigo text-white' to='/all'>All Brewniverses</Link>
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
