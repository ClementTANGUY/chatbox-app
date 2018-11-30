import React, { Component, createRef } from 'react'
import './App.css'
import Formulaire from './Components/Formulaire'
import Message from './Components/Message'

//Firebase
import base from './base'

class App extends Component {

  // On initialise le state avec un ensemble de messages vide (objet vide) et le params de l'url comme pseudo
  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo
  }

  messagesRef = createRef()

  // On synchronise l'objet messages avec la database
  /*componentDidMount () {
    base.syncState('/', {
      context: this,
      state: 'messages'
    })
  }*/

  componentDidUpdate () {
    const ref = this.messagesRef.current
    ref.scrollTop = ref.scrollHeight
  }

  // On modifie le state en ajoutant chaque fois un message indicé (à l'aide de son timestamp) à l'objet messages
  addMessage = message => {
    const messages = { ...this.state.messages }
    messages[`message-${ Date.now() }`] = message
    this.setState({ messages })
  }

  render () {
    //On crée un array de keys de l'objet messages au pluriel, sur lequel on boucle afin d'extraire ainsi pour chaque objet message au singulier, ses propres keys pseudo et le message lui-même à afficher
    const messages = Object
      .keys(this.state.messages)
      .map(key => (
        <Message
          key={ key }
          message={ this.state.messages[key].message }
          pseudo={ this.state.messages[key].pseudo }/>
      ))

    return (
      <div className='box'>
        <div>
          <div className="messages" ref={ this.messagesRef }>
            <div className="message">
              { messages }
            </div>
          </div>
        </div>
        <Formulaire
          length={ 140 }
          pseudo= { this.state.pseudo }
          addMessage={ this.addMessage }/>
      </div>
    )
  }
}

export default App
