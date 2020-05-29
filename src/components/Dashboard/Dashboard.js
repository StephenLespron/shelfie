import React, { Component } from "react";
import axios from "axios";
import "./Dashboard.css";
import Product from "../Product/Product";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [],
    };

    this.delete = this.delete.bind(this);
  }

  get() {
    axios
      .get("/api/inventory")
      .then((res) => {
        console.log(res.data);
        return this.setState({ inventory: res.data });
      })
      .catch((err) => console.log(err));
  }
  componentDidMount() {
    this.get();
  }

  delete(id) {
    axios
      .delete(`/api/inventory/${id}`)
      .then(() => this.get())
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="Dashboard">
        <Product inventory={this.state.inventory} delete={this.delete} />
      </div>
    );
  }
}
