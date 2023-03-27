import React, { Component } from "react";

export default class Invoice1 extends Component {
  render() {
    const { component2 } = this.props;
    return (
      <div>
        <h1>{component2	}</h1>
      </div>
    );
  }
}
