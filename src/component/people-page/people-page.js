import React, { Component } from "react";

import ItemList from "../item-list";
import PersonDetails from "../person-details/person-details";

import "./people-page.css";
import ErrorIndicator from "../error-indicator";

export default class PeoplePage extends Component {
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
          <ItemList onPersonSelected={this.onPersonSelected} />
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
