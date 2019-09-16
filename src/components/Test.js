import React, { Component } from 'react'

export default class Test extends Component {
  render() {
    return (
      <div>
        Soy test <br />
        <Boton />
        <Boton /> 
      </div>
    )
  } // Si creasemos un boton por cada componente (imagina que es una foto) hariamos un map de un array
}

class Boton extends Component {
  state = { likes: 0, dislikes: 0, meGusta: false } //valor de inicio de la variable

  clickLike = () => {
    !this.state.meGusta ? this.setState({           
      likes : this.state.likes + 1,
      meGusta: true}) : 
      this.setState({           
        likes : this.state.likes - 1,
        meGusta: false})
  }

  render(){
    let style = {float: 'left', padding: 20, backgroundColor: 'red'} // lo que hacen es cambiar el - de css por camelcase, porque en js se usa para restar
  
    return <div style={style}>
      Me gusta : { this.state.likes } <br />
      No me gusta: {this.state.dislikes}

      <button onClick={ this.clickLike }
      style = { this.state.meGusta ? {backgroundColor: 'red'} : {} }>
        Me gusta tipo youtube </button>

      <button onClick={ () => {
        //sst setState sirve para cambiar en pantalla algun cambio que se esté realizando, es decir, repinta. Cada vez que pulsamos likes, nos salga un número nuevo.
        this.setState({ 
          likes : this.state.likes + 1 })
      } }>
        Me gusta</button>

      <button onClick={ () => {
      //sst setState sirve para cambiar en pantalla algun cambio que se esté realizando, es decir, repinta. Cada vez que pulsamos likes, nos salga un número nuevo.
      this.setState({ likes : this.state.dislikes + 1 }) // si quiero que actúe sobre el mismo boton llamaríamos this.state.likes - 1
      } }>
      No me gusta</button>
    </div>
  }
}
// Para diferenciar componentes iguales (mismo botón por ejemplo) y saber cuantos me gusta tiene, se guardan en state (sería como guardar sus datos en un id). Cada componente sabe que es independiente del otro y tiene un estado diferente. Sólo hay un state por cada componente y puede ser un array, un numero, objeto... lo que sea.