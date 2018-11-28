import React, { Component } from 'react'
import './App.css'
import Formulaire from './Components/Formulaire'
import Message from './Components/Message'

class App extends Component {

  // On initialise le state avec un ensemble de messages vide (objet vide) et le params de l'url comme pseudo
  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo
  }

  // On modifie le state en ajoutant chaque fois un message indicé (à l'aide de son timestamp) à l'objet messages
  addMessage = message => {
    const messages = { ...this.state.messages }
    messages[`message-${ Date.now() }`] = message
    this.setState({ messages })
  }

  render () {
    return (
      <div className='box'>
        <div>
          <div className="messages">
            <Message/>
          </div>
        </div>
        <Formulaire
          pseudo= { this.state.pseudo }
          addMessage={ this.addMessage }/>
      </div>
    )
  }
}

export default App
