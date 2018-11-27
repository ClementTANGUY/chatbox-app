import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Connection extends Component {

  //On crée un state avec un pseudo d'abord vide et une redirection au Chat initialisée à faux
  state = {
    pseudo: '',
    goToChat: false
  }

  handleChange = event => {
    const pseudo = event.target.value
    this.setState({ pseudo })
  }

  //Gestion forcée du click du formulaire, prise en main de la redirection
  handleSubmit = event => {
    event.preventDefault()
    this.setState({ goToChat: true })
  }

  render() {
    //Si un pseudo est entré dans le formulaire, puis ensuite validé grâce au bouton, alors seulement redirection vers la template du Chat (avec possibilité  de revenir à la page précédente grâce au props push)
    if (this.state.goToChat) {
      return <Redirect push to={`/pseudo/${this.state.pseudo}`} />
    }

    return (
      <div className='connectionBox'>

      <form className='connection' onSubmit={ this.handleSubmit }>

      <input
        value={ this.state.pseudo }
        onChange={ this.handleChange }
        placeholder='Enter your Pseudo'
        type='text'
        required />

      <button type='Submit'>Let's Go !</button>

      </form>

      </div>
    )
  }
}

export default Connection

