import React, { Component } from 'react'

class Favorite extends Component {

  render(){

    const { id } = this.props
    const item = localStorage.getItem(`fav_${id}`)

    return(
      <li className="list-group-item bg-transparent">
        <div className='row'>
          <div className='col-9'>
            <h5>{item}</h5>
          </div>

        </div>
      </li>
    )
  }
}

export default Favorite
