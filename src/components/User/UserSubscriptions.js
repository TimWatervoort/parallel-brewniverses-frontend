import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class UserSubcriptions extends Component {

  render() {

    const { user } = this.props
    let userChannels = [];
    if (user.channels) {
      userChannels = user.channels.map(x => x.tag)
    }

    return (
      <div className="row my-3">
        <div className="col-12">
          <div className="galaxy-purple card text-white rounded">
            <h3 className="pt-3 px-3">Subscriptions</h3>
            <hr></hr>
            <div className="card-body">
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
  user: state.user
})

export default connect(mapStateToProps)(UserSubcriptions)
