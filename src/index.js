import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Connection from './Components/Connection'
import NotFound from './Components/NotFound'
import * as serviceWorker from './serviceWorker'

//On importe des components prédéfinis de routing grâce à la librairie "react-router-dom"
import { BrowserRouter, Route, Switch } from 'react-router-dom'

//On dirige vers tel ou tel component suivant les params contenus dans l'url: un formulaire de sign in de création de pseudo, vers la page du pseudo ou vers une page erreur
const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={ Connection } />
      <Route path='/pseudo/:pseudo' component={ App } />
      <Route component={ NotFound } />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
