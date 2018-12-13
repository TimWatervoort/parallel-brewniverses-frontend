import React, { Component } from 'react'
import AllChannel from './components/AllChannel/AllChannel'
import Navbar from './components/Navbar'
import SingleChannel from './components/SingleChannel/SingleChannel'
import Post from './components/Post/Post'
import AddPostForm from './components/AddPostForm'
import HomeChannel from './components/HomeChannel/HomeChannel'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import { Route, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Route exact path = '/' render={() => <Redirect to='/all'/>}/>

        <Route path = '/all' component ={AllChannel} />
        <Route path = '/brewniverse/:channel' component={SingleChannel}/>
        <Route path = '/post/:id' component={Post}/>
        <Route path = '/addpost' component={AddPostForm}/>
        <Route path = '/home' component={HomeChannel}/>
        <Route path = '/login' component={Login}/>
        <Route path = '/signup' component={Signup}/>
      </div>
    );
  }
}

export default App
