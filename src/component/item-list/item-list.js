import React, { Component } from "react";

import SwapiSevice from "../../services/swapi-services";

import "./item-list.css";
import Spinner from "../spinner";

export default class ItemList extends Component {
  swapiSevice = new SwapiSevice();

  state = {
    peopleList: null
  };

  componentDidMount() {
    this.swapiSevice.getAllPeople().then(peopleList => {
      this.setState({
        peopleList
      });
    });
  }

  onError = err => {
    console.log("error" + err);
  };

  renderItems = peopleList => {
    return peopleList.map(person => {
      return (
        <li
          className="list-group-item"
          key={person.id}
          onClick={() => this.props.onPersonSelected(person.id)}
        >
          {person.name}
        </li>
      );
    });
  };

  render() {
    const { peopleList } = this.state;

    if (!peopleList) {
      return <Spinner />;
    }

    return (
      <ul className="item-list list-group">{this.renderItems(peopleList)}</ul>
    );
  }
}
