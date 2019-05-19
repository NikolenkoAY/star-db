import React, { Component } from "react";

import ItemList from "../item-list";
import PersonDetails from "../person-details/person-details";

import "./people-page.css";

import SwapiService from "../../services/swapi-services";
import Row from "../row";

import ErrorBoundry from "../error-boundry";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: null
  };

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    });
  };
  render() {
    const itemList = (
      <ItemList
        onPersonSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
      >
        {e => `${e.name}-${e.birthYear}`}
      </ItemList>
    );
    const personDetails = (
      <ErrorBoundry>
        <PersonDetails personId={this.state.selectedPerson} />
      </ErrorBoundry>
    );
    return <Row left={itemList} right={personDetails} />;
  }
}
