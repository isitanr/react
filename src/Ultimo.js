import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export class Test extends Component { //Es mejor que todo este como let en vez de poner mucho html en el código
  render() {
    let css = {padding: 20}
    let cssLink = {color:'black', textDecoration: 'none'}
    let linkABlog = <Link to="/blog" style={cssLink}>Ir a Blog</Link>
    return (
      <div style={css}>
        {linkABlog}
      </div>
    )
  }
}