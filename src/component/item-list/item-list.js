import React, { Component } from "react";

import "./item-list.css";
import Spinner from "../spinner";

export default class ItemList extends Component {
  state = {
    itemList: null
  };

  componentDidMount() {
    const { getData } = this.props;
    getData().then(itemList => {
      this.setState({
        itemList
      });
    });
  }

  onError = err => {
    console.log("error" + err);
  };

  renderItems = arr => {
    return arr.map(({ id, name }) => {
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onPersonSelected(id)}
        >
          {name}
        </li>
      );
    });
  };

  render() {
    const { itemList } = this.state;

    if (!itemList) {
      return <Spinner />;
    }

    return (
      <ul className="item-list list-group">{this.renderItems(itemList)}</ul>
    );
  }
}
