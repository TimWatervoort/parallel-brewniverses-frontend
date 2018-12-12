import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class SingleChannelHead extends Component {
  render() {
    const { tag, length } = this.props
    const firstLetter = tag.split('').slice(0, 1)
    const capitalLetter = firstLetter[0].toUpperCase()
    const capitalized = tag.replace(firstLetter[0], capitalLetter)

    return(
      <div className='container galaxy-purple my-3 py-3 rounded'>
        <div className='row'>
          <div className='col'>
            <h3 className='brew-header text-center'>
            {length === 0 ? 'This brewniverse doesn\'t exist yet!' : `${capitalized} Brewniverse`}
            </h3>
          </div>
        </div>
        <div className='row'>
          <div className='col text-center'>
            <Link className='btn galaxy-indigo' to='/all'>All Brewniverses</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default SingleChannelHead
