import React, { Component } from 'react'
import { connect } from 'react-redux'

const imgSrc = 'http://placekitten.com/300/300'

const user = {
  id: 2,
  name: 'user_name',
  profile_img: imgSrc,
  posts: [
      {
        id: 1,
        title: 'Avery Fimbulvvinter',
        tags: ['beer', 'avery', 'belgian'],
        content: 'It is incredible.',
        score: 5,
        rating: 5,
        picture: 'https://cdn.beeradvocate.com/im/beers/310321.jpg',
        author: 'Username'
      },
      {
        id: 2,
        title: 'Old Rasputin',
        tags: ['beer', 'north coast', 'imperial', 'stout'],
        content: 'What a Russian day in the neighborhood.',
        score: 3,
        rating: 5,
        picture: 'https://www.totalwine.com/media/sys_master/twmmedia/h75/h5d/9071470805022.png',
        author: 'Username'
    },
    {
      id: 3,
      title: '90 Shilling',
      tags: ['beer', 'odell', 'amber'],
      content: 'Does not taste like coins at all.',
      score: 4,
      rating: 5,
      picture: 'https://cdn.beeradvocate.com/im/beers/740.jpg',
      author: 'Username'
    }
  ]
}

class UserProfile extends Component {

  render() {
    return (
      <div className="row my-3">
      
        <div className="col-8">
          <div className="row bg-light rounded">
            <div className="col-3">
              <img src={user.profile_img} alt="user profile" className="img-thumbnail my-3" />
            </div>
            <div className="col-9">
              <h3 className="py-3">{user.name}</h3>
            </div>
          </div>
        </div>

        <div className="col-4">
          <div className="bg-light rounded">
            <h3 className="py-3 px-3">Favorite Drinks</h3>
            <ul className="list-group list-group-flush py-3 px-3">
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

export default UserProfile