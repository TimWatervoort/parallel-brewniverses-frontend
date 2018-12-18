import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class AwfulPost extends Component {

  render() {

    const { post } = this.props

    return(
      <div className='col-lg-6 col-md-12 mb-3'>
        <div className='card my-2 shadow h-100'>
          <div className='card-body pp-card-body '>
            <div className="row ">
              <div className="col-2 pl-2 pr-1 text-center">
                  <img className='pp-image' alt='Brew' src={post.picture}></img>
              </div>
              <div className="col-8 pl-3">
                <div>
                  <h5 className='card-title pp-title'>{post.title}</h5>
                  <h6 className="text-muted">Rating: {post.rating}/5</h6>
                  <hr></hr>
                </div>
              </div>
              <div className="col-2 px-0">
                <div className="float-right mr-3">
                  <i className='mr-2 fas fa-arrow-up'></i>
                    {post.score}
                  <i className='ml-2 fas fa-arrow-down'></i>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer pp-footer-tags bg-transparent border-white">
            {
              post.tags ? post.tags.map((x, i) => <Link className='badge badge-dark galaxy-lavender text-white p-2 mr-2 mb-1' to={`/brewniverse/${x}`} key={i}>{x}</Link>) : null
            }
          </div>
          <Link className='bg-light' to={`/awfulpost`}>
            <div className="card-footer pp-footer-view text-secondary bg-transparent">
              <i className="ml-2 mt-1 pb-2 fas fa-arrow-right float-right"></i><span className="float-right">View</span>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts
})

export default connect(mapStateToProps)(AwfulPost)
