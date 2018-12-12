import React, { Component } from 'react'
import AllChannel from './components/AllChannel/AllChannel'
import Navbar from './components/Navbar'
import SingleChannel from './components/SingleChannel/SingleChannel'
import Post from './components/Post/Post'
import { Route, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Route exact path = '/' render={() => <Redirect to='/all'/>}/>
        <Route exact path = '/all' component ={AllChannel} />
        <Route path = '/brewniverse/:channel' component={SingleChannel}/>
        <Route path = '/post/:id' component={Post}/>
      </div>
    );
  }
}

export default App
