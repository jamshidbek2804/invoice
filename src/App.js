import React, { Component } from 'react'
import './App.css';
import Invoice1 from "./components/Invoice1";
import Invoice2 from "./components/Invoice2";
import Invoice3 from "./components/Invoice3";
import Invoice4 from "./components/Invoice4.js";


export default class App extends Component {
  state = {
    invoice1: true,
    invoice2: false,
    invoice3: false,
    invoice4: false,
    component1: "Invoice1",
    component2: "Invoice2",
    component3: "Invoice3",
    component4: "Invoice4",
  };

  Invoice1 = () => {
    this.setState({
      invoice1: true,
      invoice2: false,
      invoice3: false,
      invoice4: false,
    });
  };
  Invoice2 = () => {
    this.setState({
      invoice1: false,
      invoice2: true,
      invoice3: false,
      invoice4: false,
    });
  };
  Invoice3 = () => {
    this.setState({
      invoice1: false,
      invoice2: false,
      invoice3: true,
      invoice4: false,
    });
  };
  Invoice4 = () => {
    this.setState({
      invoice1: false,
      invoice2: false,
      invoice3: false,
      invoice4: true,
    });
  };
  render() {
    const {
      component1,
      component2,
      component3,
      component4,
      invoice1,
      invoice2,
      invoice3,
      invoice4,
    } = this.state;
    return (
      <div className="container mt-3">
        <button className="btn border m-2" onClick={this.Invoice1}>
          Invoice 1
        </button>
        <button className="btn border m-2" onClick={this.Invoice2}>
          Invoice 2
        </button>
        <button className="btn border m-2" onClick={this.Invoice3}>
          Invoice 3
        </button>
        <button className="btn border m-2" onClick={this.Invoice4}>
          Invoice 4
        </button>
        {invoice1 ? (
          <Invoice1 component1={component1} />
        ) : invoice2 ? (
          <Invoice2 component2={component2} />
        ) : invoice3 ? (
          <Invoice3 component3={component3} />
        ) : invoice4 ? (
          <Invoice4 component4={component4} />
        ) : (
          <h1>Hech narsa mavjud emas!</h1>
        )}
      </div>
    );
  }
}