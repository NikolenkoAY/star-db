import React, { Component } from "react";

import "./people-page.css";

import SwapiService from "../../services/swapi-services";
import Row from "../row";

import ErrorBoundry from "../error-boundry";

import { PersonList } from "../sw-components";

import { PersonDetails } from "../sw-components";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedItem: null
  };

  onItemSelected = id => {
    this.setState({
      selectedItem: id
    });
  };

  render() {
    return (
      <div>
        <Row
          left={
            <ErrorBoundry>
              <PersonList onItemSelected={this.onItemSelected} />
            </ErrorBoundry>
          }
          right={
            <ErrorBoundry>
              <PersonDetails itemId={this.state.selectedItem} />
            </ErrorBoundry>
          }
        />
      </div>
    );
  }
}
