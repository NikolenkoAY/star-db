import React, { Component } from "react";

import "./item-details.css";
import SwapiService from "../../services/swapi-services";
import Spinner from "../spinner";
import ErrorButton from "../error-button";

export default class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    item: null,
    updating: false,
    image: null
  };

  componentDidMount() {
    this.updateItem();
  }
  componentDidUpdate(prevProps) {
    if (this.props.itemId === prevProps.itemId) {
    } else {
      this.setState({ updating: true });

      this.updateItem();
    }
  }

  updateItem = () => {
    const { itemId, getData, getImageURL } = this.props;

    if (!itemId) {
      return;
    }
    getData(itemId).then(item => {
      this.setState({ item, image: getImageURL(item) });
      this.setState({ updating: false });
    });
  };

  render() {
    const { item, updating, image } = this.state;
    if (updating) {
      return <Spinner />;
    }
    if (!item) {
      return (
        <div className="item-details card">
          <h4>Select a item from a list</h4>
        </div>
      );
    }

    const { name } = item;
    return (
      <div className="item-details card">
        <img alt="item" className="item-image" src={image} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(this.props.children, (child, idx) => {
              return React.cloneElement(child, { item });
            })}
          </ul>
          <ErrorButton />
        </div>
      </div>
    );
  }
}

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};
export { Record };
