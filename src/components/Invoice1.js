import React, { Component } from "react";

export default class Invoice1 extends Component {
  render() {
    const { component1 } = this.props;
    return (
      <div>
        <h1>{component1}</h1>
      </div>
    );
  }
}
