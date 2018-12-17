import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
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

        <div className="col-md-8 mt-3 col-sm-12">
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

        <div className="col-md-4 mt-3 col-sm-12">
          <div className="card h-100 bg-light">
            <div className='card-body'>
              <h3 className="pt-2 px-3">Favorite Drinks</h3>
              <ul className="list-group list-group-flush pt-2 pb-3 px-3">
                 {favorites.map((x, i) => <StaticFavorite key={i} id={x} />)}
              </ul>
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
