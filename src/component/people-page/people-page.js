import React, { Component } from "react";

import ItemList from "../item-list";
import PersonDetails from "../person-details/person-details";

import "./people-page.css";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-services";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: null,
    error: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    });
  };
  render() {
    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            onPersonSelected={this.onPersonSelected}
            getData={this.swapiService.getAllPeople}
            renderItem={({ name, birthYear }) => `${name}-${birthYear}`}
          />
        </div>
        <div className="col-md-6  ">
          {this.state.hasError ? (
            <ErrorIndicator />
          ) : (
            <PersonDetails personId={this.state.selectedPerson} />
          )}
        </div>
      </div>
    );
  }
}
