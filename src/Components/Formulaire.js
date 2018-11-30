import React, { Component } from 'react'

class Formulaire extends Component {

  //On initialise le state de ce component pour chaque pseudo avec un message vide
  state = {
    message: '',
    length: this.props.length
  }

  // La fonction createMessage reprend les props addMessage, pseudo et length du component principal de classe APP
  createMessage = () => {

    const { addMessage, pseudo, length } = this.props
    const message = {
      pseudo,
      message: this.state.message
    }

    // On ajoute le message indicé dans le component APP
    addMessage(message)

    //Reset de la valeur entrée dans la textarea
    this.setState({ message: '', length })
  }

  // On gère le click de soumission du message en passant la fonction createMessage
  handleSubmit = event => {
    event.preventDefault()
    this.createMessage()
  }

  handleChange = event => {
    const message = event.target.value
    const length = this.props.length - message.length
    this.setState({ message, length })
  }

   //Si on tape "Enter", le message est crée
    handleKeyUp = event => {
      if (event.key === 'Enter') {
        this.createMessage()
      }
    }

  render() {
    return (
      <form
        onSubmit={ this.handleSubmit }
        className="form">
        <textarea
          value={ this.state.message }
          onChange={ this.handleChange }
          onKeyUp={ this.handleKeyUp }
          required
          maxLength= { this.props.length }/>
        <div className="info">
          { this.state.length }
        </div>
        <button type='submit' >
          Send!
        </button>
      </form>
    )
  }
}

export default Formulaire

