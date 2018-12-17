import React, { Component } from 'react'
import { connect } from 'react-redux'
import StaticFavorite from './StaticFavorite'

const imgSrc = 'http://placekitten.com/300/300'

class OtherUserProfile extends Component {

  render() {

    const favorites = [1,2,3]

    const { id, users } = this.props
    const select = users.filter(x => parseInt(x.id) === parseInt(id))

    let user
    if (select.length === 0) {
      user = {username: ''}
    } else {
      user = select[0]
    }


    return (

      <div className="row my-3">

        <div className="col mt-3">
          <div className='card h-100 bg-light'>
            <div className='card-body'>
              <div className="row">
                <div className="col-5">
                  <img src={select.length > 0 ? user.picture : imgSrc} alt="user profile" className="user-img img-fluid my-3" />
                </div>
                <div className="col-7">
                  <h3 className="py-1"><strong>User: </strong>{user.username}</h3>
                  <h3 className="py-1"><strong>Posts: </strong>{user.posts ? user.posts.length : 0}</h3>
                </div>
              </div>
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

export default connect(mapStateToProps)(OtherUserProfile)
