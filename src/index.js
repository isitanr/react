import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter } from 'react-router-dom'

class Productoschema {
  constructor() {
    this.nombre = ''
    this.precio = 0
    this.proveedor = ''
  }
}

//rcc
export default class Test extends Component {
  state = {
    producto: new Productoschema()
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}


ReactDOM.render(<Productoschema/>, document.getElementById('root'))