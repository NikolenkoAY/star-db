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
      this.setState({ item, image: getImageURL(item), updating: false });
    });
  };

  render() {
    const { item, updating, image } = this.state;

    if (updating) {
      return <Spinner />;
    }
    return (
      <div className="item-details card">
        {item ? (
          <ItemDetailsView item={item} image={image} />
        ) : (
          <span>Select a item</span>
        )}
      </div>
    );
  }
}

const ItemDetailsView = ({ item, image }) => {
  const { name, gender, birthYear, eyeColor } = item;

  return (
    <React.Fragment>
      <img alt="item" className="item-image" src={image} />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
        <ErrorButton />
      </div>
    </React.Fragment>
  );
};
