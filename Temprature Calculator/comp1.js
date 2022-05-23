import React, { Component } from "react";
import { Button } from "reactstrap";

export default class comp1 extends Component {
  render() {
    return (
      <div>
        <h1>Hava Nasıl</h1>
        <div id="mainArea">
          <h2>
            Button count: <span> {this.props.countComp} </span>
          </h2>

          <Button onClick={this.props.numberUpdate} id="mainButton">
            Button
          </Button>
          <h2> Üç birimde sıcaklık ölçümü </h2>
        </div>
      </div>
    );
  }
}
