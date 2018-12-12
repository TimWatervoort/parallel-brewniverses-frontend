import React, { Component } from 'react'
import Channel from './components/Channel'
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Channel />
      </div>
    );
  }
}

export default App;
