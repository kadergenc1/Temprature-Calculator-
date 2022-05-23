import React, { Component } from 'react'

export default class comp1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <h1>CELCIUS {this.props.count}</h1>
          
      </div>
    )
  }
}
