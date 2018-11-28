import React, { Component } from 'react'

class Formulaire extends Component {

  //On initialise le state de ce component pour chaque pseudo avec un message vide
  state = {
    message: ''
  }

  // La fonction createMessage reprend les props addMessage et pseudo du component principal de classe APP
  createMessage = () => {

    const { addMessage, pseudo } = this.props

    const message = {
      pseudo,
      message: this.state.message
    }

    // On ajoute le message indicé dans le component APP
    addMessage(message)

    //Reset de la valeur entrée dans la textarea
    this.setState({ message: '' })
  }
  // On gère le click de soumission du message en passant la fonction createMessage
  handleSubmit = event => {
    event.preventDefault()
    this.createMessage()
  }

  handleChange = event => {
    const message = event.target.value
    this.setState({ message })
  }


  render() {
    return (
      <form
        onSubmit={ this.handleSubmit }
        className="form">
        <textarea
          value={ this.state.message }
          onChange={ this.handleChange }
          required
          maxLength='140' />
        <div className="info">
          140
        </div>
        <button type='submit' >
          Send!
        </button>
      </form>
    )
  }
}

export default Formulaire

