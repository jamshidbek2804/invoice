import React, { Component } from "react";

export default class Invoice1 extends Component {
  render() {
    const { component3 } = this.props;
    return (
      <div>
        <h1>{component3}</h1>
      </div>
    );
  }
}
