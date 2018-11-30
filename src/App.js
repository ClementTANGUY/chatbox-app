import React, { Component, createRef } from 'react'
import './App.css'
import './animations.css'

import Formulaire from './Components/Formulaire'
import Message from './Components/Message'

// Firebase
import base from './base'

// Animations
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group'


class App extends Component {

  // On initialise le state avec un ensemble de messages vide (un objet principal vide) ainsi que le params de l'url comme pseudo
  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo
  }

  //On ajoute une ref à createRef
  messagesRef = createRef()

  // On synchronise l'objet principal du state "messages" avec la database de Firebase afin de garder les messages du pseudo en mémoire
  /*componentDidMount () {
    base.syncState('/', {
      context: this,
      state: 'messages'
    })
  }*/

  // On indique, au moment de la maj du state, à la ref concernée par la div messages que le haut du scroll est toujours sa hauteur max, ce qui permet d'avoir le dernier message ajouté au-dessus de la fenêtre
  componentDidUpdate () {
    const ref = this.messagesRef.current
    ref.scrollTop = ref.scrollHeight
  }

  // On modifie le state en ajoutant chaque fois un message indicé (à l'aide de son timestamp) à l'objet global messages et on ne garde que les 10 derniers
  addMessage = message => {
    const messages = { ...this.state.messages }

    messages[`message-${ Date.now() }`] = message

    Object
    .keys(messages)
    .slice(-10)
    /*.forEach(key => {
      messages[key] = null
    })*/

    this.setState({ messages })
  }

  // On définit une fonction qui demande si les messages appartiennent au pseudo "loggé"
  isUser = pseudo => pseudo === this.state.pseudo

  render () {
    //On crée un array de keys de l'objet principal du state "messages", sur lequel on boucle, afin d'extraire ainsi pour chaqu'un de ses objets "message" ses propres keys pseudo et le message lui-même à afficher
    const messages = Object
      .keys(this.state.messages)
      .map(key => (
        <CSSTransition
          timeout={ 700 }
          classNames= 'fade'
          key={ key }>
          <Message
            isUser={ this.isUser }
            message={ this.state.messages[key].message }
            pseudo={ this.state.messages[key].pseudo }/>
        </CSSTransition>
      ))

    return (
      <div className='box'>
        <div>
          <div className="messages" ref={ this.messagesRef }>
            <TransitionGroup className="message">
              { messages }
            </TransitionGroup>
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
