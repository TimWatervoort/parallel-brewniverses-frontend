import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userLogout } from '../../actions/users'
import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom'

const imgSrc = 'http://placekitten.com/300/300'

class UserProfile extends Component {

  logout = e => {
    const { userLogout } = this.props
    userLogout()
  }

  render() {

    const { user } = this.props

    return (

      <div className="row my-3">

      {Cookies.get('name') ? <div></div> : <Redirect to='/' />}

        <div className="col-md-8 mt-3 py-1 col-sm-12">
          <div className='card galaxy-purple text-white rounded'>
          <div className='card-body'>

            <div className="row ">
              <div className="col-5">
                <img src={imgSrc} alt="user profile" className="user-img img-fluid my-3" />
              </div>
              <div className="col-7">
                <h3 className="py-1"><strong>User: </strong>{user.username}</h3>
                <h3 className="py-1"><strong>Posts: </strong>{user.posts ? user.posts.length : 0}</h3>
                {Cookies.get('name') ? <button onClick={this.logout} className='btn galaxy-indigo text-white sub-button'>Log Out</button> : <div></div>}
              </div>
            </div>

          </div>
          </div>

        </div>

        <div className="col-md-4 mt-3 col-sm-12">
          <div className="galaxy-purple text-white rounded">
            <h3 className="pt-3 px-3">Favorite Drinks</h3>
            <ul className="list-group list-group-flush pt-2 pb-3 px-3">
              <li className="list-group-item bg-transparent">Old Rasputin</li>
              <li className="list-group-item bg-transparent">Coffee</li>
              <li className="list-group-item bg-transparent">Beer</li>
            </ul>
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

const mapDispatchToProps = dispatch => bindActionCreators({
  userLogout
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
