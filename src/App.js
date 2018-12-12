import React, { Component } from 'react'
import AllChannel from './components/AllChannel'
import Navbar from './components/Navbar'
import { Route, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Route exact path = '/' render={() => <Redirect to='/all'/>}/>
        <Route exact path = '/all' component ={AllChannel} />
      </div>
    );
  }
}

export default App
