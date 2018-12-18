import React, { Component } from 'react'
import AllChannel from './components/AllChannel/AllChannel'
import Navbar from './components/Navbar'
import SingleChannel from './components/SingleChannel/SingleChannel'
import Post from './components/Post/Post'
import AddPostForm from './components/AddPostForm'
import HomeChannel from './components/HomeChannel/HomeChannel'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import AwfulHome from './components/Awful/AwfulHome'
import UserHome from './components/User/UserHome'
import OtherUserHome from './components/User/OtherUser/OtherUserHome'
import AwfulPostView from './components/Awful/AwfulPostView'
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
        <Route path = '/user' component={UserHome} />
        <Route path = '/users/:id' component={OtherUserHome} />
        <Route path = '/awful' component={AwfulHome} />
        <Route path = '/awfulpost' component={AwfulPostView} />
      </div>
    );
  }
}

export default App
