import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Form.css";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      name: "",
      price: "",
      img: "",
      imgRender: `https://www.cowgirlcontractcleaning.com/wp-content/uploads/sites/360/2018/05/placeholder-img-3.jpg`,
    };
  }

  componentDidMount() {
    if (this.props.match.params.id > 0) {
      axios
        .get(`/api/inventory/${this.props.match.params.id}`)
        .then((res) => {
          const { name, price, img } = res.data[0];
          return this.setState({
            name: name,
            price: price,
            img: img,
            imgRender: img,
          });
        })
        .catch((err) => console.log(err));
    }
  }

  handleChange(val, key) {
    this.setState({
      [key]: val,
    });
  }
  clearInput() {
    this.setState({
      name: "",
      price: "",
      img: "",
    });
  }
  addItem() {
    const newItem = this.state;
    axios
      .post("/api/inventory", newItem)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    this.clearInput();
  }

  updateItem() {
    const updatedItem = this.state;
    axios
      .put(`/api/inventory/${this.props.match.params.id}`, updatedItem)
      .then(() => this.props.history.goBack())
      .catch((err) => console.log(err));

    this.clearInput();
  }

  render() {
    let addUpdate;
    if (this.props.match.params.id > 0) {
      addUpdate = (
        <button onClick={() => this.updateItem()}>Update Product</button>
      );
    } else {
      addUpdate = (
        <Link to="/">
          <button onClick={() => this.addItem()}>Add Inventory</button>
        </Link>
      );
    }
    return (
      <div className="FormBox">
        <div className="Form">
          <div className="formImgBox">
            <img alt="" src={this.state.imgRender} />
          </div>
          Image URL:
          <input
            placeholder="image URL"
            value={this.state.img}
            onChange={(ev) => this.handleChange(ev.target.value, "img")}
          />
          Product Name:
          <input
            placeholder="name"
            value={this.state.name}
            onChange={(ev) => this.handleChange(ev.target.value, "name")}
          />
          Price:
          <input
            placeholder="price"
            value={this.state.price}
            onChange={(ev) => this.handleChange(ev.target.value, "price")}
          />
          <div className="btnBoxForm">
            {addUpdate}
            <button onClick={() => this.props.history.goBack()}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}
