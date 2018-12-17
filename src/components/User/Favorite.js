import React, { Component } from 'react'

class Favorite extends Component {

  constructor(props) {
    super(props)
    const origItem = localStorage.getItem(`fav_${this.props.id}`)
    this.state = {
      editMode: false,
      item: origItem
    }
  }

  setItem = e => {
    this.setState({
      item: e.target.value
    })
  }

  changeItem = e => {
    e.preventDefault()
    const { id } = this.props
    localStorage.setItem(`fav_${id}`, this.state.item)
    this.setState({
      editMode: false
    })
  }

  startEdit = e => {
    this.setState({
      editMode: true
    })
  }

  render(){

    const { id } = this.props
    const item = localStorage.getItem(`fav_${id}`)

    const editForm = <form onSubmit={this.changeItem} onBlur={this.changeItem}><input className='form-control' type='text' value={this.state.item} onChange={this.setItem}/></form>

    return(
      <li className="list-group-item bg-transparent">
        <div className='row'>
          <div className='col-9'>
            {this.state.editMode ? editForm : <h5>{item}</h5>}
          </div>
          <div className='col-3'>
            <button onClick={this.startEdit} className='btn galaxy-lavender py-0 px-1'><i className="fas fa-edit"></i></button>
          </div>
        </div>
      </li>
    )
  }
}

export default Favorite
