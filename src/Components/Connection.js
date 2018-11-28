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

  //Gestion du click du formulaire en modifiant le state et sa key goToChat à true, on autorise alors la redirection à la page perso du pseudo
  handleSubmit = event => {
    event.preventDefault()
    this.setState({ goToChat: true })
  }

  render() {
    //Si un pseudo est entré dans le formulaire, puis validé grâce au bouton, alors seulement la redirection vers le template du pseudo s'opère (avec possibilité  de revenir à la page précédente grâce au props prédéfini push)
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

      <button type='Submit'>Go!</button>

      </form>

      </div>
    )
  }
}

export default Connection

