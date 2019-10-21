import React from "react";
import Product from "./Product";


export default class App extends React.Component {
    render() {
        return (<div>
            <h1>Dashboard</h1>
            <Product />
        </div>
        );
    }
}