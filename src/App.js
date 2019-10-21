import React, { Component } from "react";
import axios from "axios";
import Dashboard from "./Components/Dashboard";
import Form from "./Components/Form";
import Header from "./Components/Header";
import "./App.css"


export default class App extends Component {

  render() {
    return (
      <div>
        <Dashboard />
        <Form />
        <Header />
      </div>
    );
  }
}

