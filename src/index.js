//si escribo rcc me crea automaticamente el formato de componente
//si escribo clg me pone automaticamente el console.log
//imr importa la opción que elijas
// Como en jsx no te autocompleta el html, es bien si lo haces en html y luego lo pasas a jsx. El <p>lorem</p> sirve para poner la frase esa random.
// mirar sistema de routes !
// se pueden abrir más terminales donde pone 2:node al más

import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter } from 'react-router-dom'
import { Test } from './compontents/Test'

const rutas = (
<BrowserRouter>
  <Router exact path="/" component={ Home } />
  <Router path="/test" component={ Test } />
</BrowserRouter>
)

ReactDOM.render(rutas, document.getElementById('root'))