import React, { Component } from 'react';

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
            <h3 className='text-center'>
            {length === 0 ? 'This brewniverse doesn\'t exist yet!' : `${capitalized} Brewniverse`}
            </h3>
          </div>
        </div>
      </div>
    )
  }
}

export default SingleChannelHead
