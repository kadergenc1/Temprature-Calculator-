import React, { Component } from 'react'

export default class fahrenheit extends Component {
  render() {
    return (
      <div>
          <h1>Fahrenheit   {(this.props.count *9/8) +32 }  </h1>
         
          
        
        </div>
    )
  }
}
