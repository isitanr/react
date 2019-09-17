/*
import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export class Test extends Component { //Es mejor que todo este como let en vez de poner mucho html en el código
  
  state = {
    cliente: { nombre: '', direccion: '' }, //es lo que va a ir a la base de datos
    ux: {} //cosas que no van a ir a la base de datos
  }

  render() {
    let css = {padding: 20}
    let cssLink = {color:'black', textDecoration: 'none'}
    let linkABlog = <Link to="/blog" style={cssLink}>Ir a Blog</Link>
    //document.getElementById('elinput').value

    return (
      <div style={css}>
        {linkABlog}

        <input
        //id="elinput" en vez de utilizar esto ya que tenemos un evento onChange onClick etc, se usa una callback y se guarda algo en el elemento con e.target.value y state (más arriba). Lo que hace es guardarte en el objeto cliente lo que escribas en el input nombre. Los ... indican que dejen todos los valores que tengan los atributos de cliente y que solo cambie nombre (que no sólo se quede con nombre sino que guarde los que no se han modificado)
        onChange={ e => { this.setState({ cliente: { ...this.state.cliente, nombre: e.target.value } }) 
        } }
        className="form-control"
        placeholder="escribe tu nombre" />

        <pre>
        {JSON.stringify(this.state, undefined, 2)}
        </pre>

      </div>
    )
  }
}

export class Test extends Component {
  saveToDb(){}

  render() {
    let css = { padding: 20 }
    return ( <div>
      <Lobo nombre="juanito" saveToDb={this.saveToDb} />
      <Lobo nombre="pepito" />
      </div>
    )
  }
}

class Lobo extends component {
  grabar(){
    this.props.saveToDb()
  }
  render() {
    <div>
      Soy el Lobo {this.props.nombre}
    </div>
  }
} */