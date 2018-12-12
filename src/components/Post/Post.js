import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Post extends Component {
  render(){
    const { posts, match } = this.props
    const id = match.params.id
    const post = posts.filter(x => parseInt(x.id) === parseInt(id))[0]

    const tagBadges = post.tags.map((x,i) => <Link className='badge badge-dark mx-1' to={`/brewniverse/${x}`} key={i}>{x}</Link>)

    return(
      <div className='galaxy-purple container mt-3 rounded'>
        <div className='row pt-3'>
          <div className='col-6'>
            <h3>{post.title}</h3>
          </div>
          <div className='col-6'>
            <h3>Rating: {post.rating}/5</h3>
          </div>
        </div>

        <hr></hr>

        <div className='row pb-3'>
          <div className='col-6 text-center'>
            <img src={post.picture} alt='Brew' className='pp-picture'/>
          </div>
          <div className='col-6'>
            <p>{post.content}</p>
          </div>
        </div>

        <hr></hr>

        <div className='row pb-2'>
          <div className='col-6'>
            <h4>{post.author}</h4>
          </div>
          <div className='col-6'>
            <h4><i className="fas fa-arrow-up"></i> {post.score} <i className="fas fa-arrow-down"></i></h4>
          </div>
        </div>

        <div className='row pb-2'>
          <div className='col pb-2'>
            {tagBadges}
          </div>
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts
})

export default connect(mapStateToProps)(Post)
