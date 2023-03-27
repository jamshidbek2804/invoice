import React, { Component } from "react";

export default class Invoice1 extends Component {
  render() {
    const { component4 } = this.props;
    return (
      <div>
        <h1>{component4}</h1>
      </div>
    );
  }
}
