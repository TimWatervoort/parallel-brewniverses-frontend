import React, { Component } from 'react'
import { connect } from 'react-redux'

const user = {
  subs: [
    "beer",
    "stout",
    "north coast",
    "imperial",
  ]
}

class UserSubcriptions extends Component {

  render() {
    return (
      <div className="row my-3">
        <div className="col-12">
          <div className="bg-light rounded">
            <h3 className="py-3 px-3">Subscriptions</h3>
            <ul className="list-group pb-3 px-3">
              {
                user.subs.map((sub, i) => (
                  <li key={i} className="list-group-item bg-transparent">
                    <h5>{sub}</h5>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default UserSubcriptions