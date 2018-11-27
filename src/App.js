import React, { Component } from 'react'
import './App.css'
import Formulaire from './Components/Formulaire'
import Message from './Components/Message'

class App extends Component {
  render () {
    return (
      <div className='box'>
        <div>
          <div className="messages">
            <Message/>
          </div>
        </div>
        <Formulaire/>
      </div>
    )
  }
}

export default App
