import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AwfulPostView extends Component {

  render() {

    const awfulObj = {
      title: 'Dishwasher Detergent',
      rating: 5,
      content: 'Absolutely delicious.',
      score: 100,
      author: 'Gary Busey',
      picture: 'https://target.scene7.com/is/image/Target/GUEST_2202ab72-af05-433d-97b1-50af69a9b935?wid=488&hei=488&fmt=pjpeg',
      authorId: 9,
      tags: ['french', 'cuisine', 'fine dining', 'lovely'],
      id: 1
    }

    return(
    <div className='container mb-2 mt-3 rounded bg-light'>
      <div className='row pt-3'>

        <div className='col-6'>
          <h3>{awfulObj.title}</h3>
        </div>

        <div className='col-4'>
          <h3>Rating: {awfulObj.rating}/5</h3>
        </div>

      </div>

      <hr></hr>

      <div className='row pb-3'>
        <div className='col-6 text-center'>
          <img src={awfulObj.picture} alt='Brew' className='img-fluid' style={{ borderRadius: '.25em' }}/>
        </div>
        <div className='col-6'>
          <p>{awfulObj.content}</p>
        </div>
      </div>

      <hr></hr>

      <div className='row pb-2'>
        <div className='col-6'>
          <h5>Reviewed by {awfulObj.author}</h5>
        </div>
        <div className='col-6'>
          <h4>
            <i className="mr-2 uparrow fas fa-arrow-up"></i>
            {awfulObj.score}
            <i className="ml-2 downarrow fas fa-arrow-down"></i>
          </h4>
        </div>
      </div>

      <div className='row pb-2'>
        <div className='col pb-2'>
            {awfulObj.tags ? awfulObj.tags.map((x,i) => <Link className='badge badge-dark galaxy-indigo text-white p-2 mr-1 mb-1' to={`/brewniverse/${x}`} key={i}>{x}</Link>) : <div></div>}
        </div>
      </div>

    </div>
    )
  }
}

export default AwfulPostView
