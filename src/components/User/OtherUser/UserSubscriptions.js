import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class OtherUserSubscriptions extends Component {

  render() {

    const { id, users } = this.props
    const select = users.filter(x => parseInt(x.id) === parseInt(id))

    let user
    if (select.length === 0) {
      user = {username: '', channels: []}
    } else {
      user = select[0]
    }

    const userChannels = user.channels.map(x => x.tag)

    return (
      <div className="row my-3">
        <div className="col-12">
          <div className="card bg-light">
            <h3 className="pt-3 px-3">Subscriptions</h3>
            <hr></hr>
            <div className="ml-3 mb-3">
              {userChannels.map((x,i) => <Link to={`/brewniverse/${x}`}className='badge badge-dark galaxy-indigo p-2 mx-1' key={i}>{x}</Link>)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  users: state.users
})

export default connect(mapStateToProps)(OtherUserSubscriptions)
