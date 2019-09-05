
//para escribir en jsx se necesita poner:
//import React from 'react'
import { productos } from '../index' //Acostumbrarse a ponerlo entre llaves, como no exporta solo una cosa, que cogeremos más cosas de miercoles, hay que indicarlo con {}
import './index.css'

//Si tiene componentes dentro primera en mayúscula {...p} es destructurar un objeto, es decir no necesito decir p.nombre, ya me valdría nombre.
// map coge un array inicial y a partir de ese array, te devuelve un array con la transformación que tu quieras [1,2,3].map (numero) => { return '<p>' numero '<p/>'} te crea un parrafo para cada número
class SelectProductos extends React.Component { 
  render(){
  return ( <select>
      {productos.map( (p, i) => { return <option key={i}> {p.nombre} </option>} )} 
  </select> ) // i es un atributo que no puede repetrise en ningun producto, i es el indice
        // en html <img src="" alt="" style="" class="" /> y en react son props: va a recibir el índice y las tres propiedades de precio, nombre y blabla
}
}

class ListadoProductos extends React.Component { // un react.component siempre tiene que tener un render y siempre un return que va a devolver algo
  render() { return <div>
    {productos.map( (p,i) => { return <ShowProducto key={i} {...p} />} )}
    </div> }
}

class ShowProducto extends React.Component { //solo nos enseña un producto de la lista
  render(){
    let style = {color: 'red'}
    return <div>
      <h3 className="manita" style= { style }>{this.props.nombre}</h3> 
    </div>
  }
} // o dentro poner style = {{ color : 'red' }}

export class Home extends React.Component {
  render(){ return <div>
      <SelectProductos />
      <ListadoProductos />
    </div>
  }
}

// https://madagascript-soft.firebaseapp.com Instalar ES7 React/Redux... Instalar en el visual basic

/*ESTO ESTARÍA EN INDEX (es el archivo que sirve para subir cosas)
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import { Home } from './GestionProductos'

export const productos = [
{ nombre: 'Prod 1', precio: 23, seccion: 'A' },
{ nombre: 'Prod 2', precio: 256, seccion: 'A' },
{ nombre: 'Prod 3', precio: 56, seccion: 'B' },
{ nombre: 'Prod 4', precio: 56756, seccion: 'C' }
]

ReactDOM.render(<Home />, document.getElementById('root'))*/
