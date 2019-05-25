import React, { Component } from "react";

import ItemList from "../item-list";
import ItemDetails from "../item-details";

import "./people-page.css";

import SwapiService from "../../services/swapi-services";
import Row from "../row";

import ErrorBoundry from "../error-boundry";

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
    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={e => `${e.name}-${e.birthYear}`} //можно рендер, а можно ниже, как чилдрен
      >
        {e => `${e.name}-${e.birthYear}`}
      </ItemList>
    );
    const itemDetails = (
      <ErrorBoundry>
        <ItemDetails itemId={this.state.selectedItem} />
      </ErrorBoundry>
    );
    return <Row left={itemList} right={itemDetails} />;
  }
}
