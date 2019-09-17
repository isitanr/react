/* import React, { Component } from 'react'
import { ajaxGet } from './index'

 ESTO IRÍA EN INDEX
export const ajaxGet = (url, cb) => {
fetch( url, {
method: 'GET',
headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
// body: JSON.stringify(this.state)
})
.then( res => { return res.json() })
.then( data => { cb(data) } )
// devuelve Promise, dejamos el último then() para que lo haga el Component
}

export class Test extends Component {

  state = { cuentos: [] }

  componentDidMount(){ 
    this.hacerAjax()
  }

  hacerAjax(){
    ajaxGet('http://192.168.105.97:3000/tere/cuentos', (cuentos) => { console.log( cuentos ),
    this.setState({ cuentos: cuentos })
  })
  }

  // .map pintaria una lista
  render() {
    return (
      <div>
        <button onClick={ () => this.hacerAjax() }>hace el ajax a consola</button>
        soy test

        {this.state.cuentos.map( (cuento, index) => { <div key={index} > {cuento.titulo} </div> } )} 

      </div>
    )
  }
} //Valdría poner en key {cuento._id} porque en la base de datos tenemos id que nunca cambia y no se repite
// para hacer ajax se puede usar jQuery o ES6 puro: fetch()->Promise. fetch lleva un string (una url) y un objeto con toda la infomación (methor, headers... igual que jquery). Promise .then() o .catch()

*/