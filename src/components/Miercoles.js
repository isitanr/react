
/* Hacemos una aplicacion en la que haya dos piezas, un componente para el titulo y otro para el texto. Coge la librería de React para poder seguir con esto
import React from 'react'
import ReactDOM from 'react-dom'

function Parrafo() { // te da warning porque no has usado esa varible para nada, o se usa o se comenta, todas las variables que vayan a ser componentes hay que poner la primera en mayúscula
  return <p> y aquí letras </p>
}

function Titulo(props) {
  return <h3> { props.texto } </h3>
}

function Todo() { // Normas: 1. Todas las etiquetas tienen que estar o cerradas <br></br> o autocerradas <br />
  // 2. Si vas a devolver bastante codigo html desde un componete, mételo en un div (nivel superior). Acostumbrarse a poner parentesis siempre. 3. Los eventos se escriben en camelcase
  let nombre = 'Pedro'
  return (
    <div>
        hola {nombre}!!!
        <Titulo texto="Pedro" /> 
        <Titulo texto="Juan" /> 
        <br />
        <Boton1 textoBoton="guardar" />
        <Boton1 textoBoton="borrar"/>
        <hr></hr>
        <Parrafo />
    </div>
  )
}

function Boton1(props) {
  let mensaje = props.textoBoton === 'guardar' ? 'hola' : 'adios'
  return (
  <button onClick = { () =>  alert( mensaje ) }> 
    { props.textoBoton } 
  </button>)
}

ReactDOM.render(<Todo />,document.getElementById('root')) 

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import { Home } from './GestionProductos'*/


export const nbsp = (numero) => { // función que hemos creado para poner espacios
  let str = ''
  for (let i = 1; i <= numero; i++ ) { str += '&nbsp;' }
  return ( <span dangerouslySetInnerHTML={ {__html: str} } /> )
}

export const br = (numero) => { // función que hemos creado para poner saltos
  let str = ''
  for (let i = 1; i <= numero; i++) {str += '<br>'}
  return (<span dangerouslySetInnerHTML={ {__html: str} } /> )
}


export const productos = [
{ nombre: 'Prod 1', precio: 23, seccion: 'A' },
{ nombre: 'Prod 2', precio: 256, seccion: 'A' },
{ nombre: 'Prod 3', precio: 56, seccion: 'B' },
{ nombre: 'Prod 4', precio: 56756, seccion: 'C' }
]

class SelectProductos extends React.Component { //Si tiene componentes dentro primera en mayúscula {...p} es destructurar un objeto, es decir no necesito decir p.nombre, ya me valdría nombre.
// map coge un array inicial y a partir de ese array, te devuelve un array con la transformación que tu quieras [1,2,3].map (numero) => { return '<p>' numero '<p/>'} te crea un parrafo para cada número
  render(){
  return ( <select>
      {productos.map( (p, i) => { return <option key={i}> {p.nombre} </option>} )} 
  </select> ) // i es un atributo que no puede repetrise en ningun producto, i es el indice
}
}

function Producto(props) {
let style = {padding: 20}
let nombre = <h3 className="text-info"> {props.nombre} </h3> //className hace lo mismos que class en html 
let seccion = <small> {props.seccion} </small>
let precio = <small> {props.precio} </small>


// Esta parte es claramente el html, cada apartado viene explicado arriba haciendo referencia
return <div style={style}> 
{nombre}
{seccion} {br(1)} {precio}
{nbsp(5)}
</div>
}

//podemos exportar por ejemplo el selector a otra parte poniendo export al principio y luego en un nuevo documento por ej: import (SelectProductos) from './index'
function Home() {
return <div>
  <SelectProductos />
  {productos.map( (p, i) => { return <Producto key={i} {...p} /> } )}
</div>
}

class Rectangulo { //crear un rectangulo
  constructor (al, an) {
    this.alto = al
    this.ancho = an
  }
  area(){
    return this.alto * this.ancho;
  }
}

class Cuadrado extends Rectangulo { //esto hereda todos los atributos de rectangulo, no se parte de 0, ya tiene el método área
  constructor(lado){
    super(lado, lado)
    this.lado = lado
  }
} 

let c1 = new Cuadrado(12)
//c1.lado
let c2 = new Cuadrado(23)
//c2.lado

ReactDOM.render(<Home />, document.getElementById('root'))