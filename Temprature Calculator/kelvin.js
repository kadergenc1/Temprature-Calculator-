import React, { Component } from 'react'

export default class kelvin extends Component {
  render() {
    return (
      <div>
          <h1>Kelvin {this.props.count + 273} </h1>
      </div>
    )
  }
}
