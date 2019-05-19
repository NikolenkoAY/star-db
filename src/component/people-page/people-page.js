import React, { Component } from "react";

import ItemList from "../item-list";
import PersonDetails from "../person-details/person-details";

import "./people-page.css";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-services";
import Row from "../row";

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
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const itemList = (
      <ItemList
        onPersonSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={({ name, birthYear }) => `${name}-${birthYear}`}
      />
    );
    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson} />
    );
    return <Row left={itemList} right={personDetails} />;
  }
}
