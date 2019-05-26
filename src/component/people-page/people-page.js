import React, { Component } from "react";

import ItemList from "../item-list";
import ItemDetails, { Record } from "../item-details";

import "./people-page.css";

import SwapiService from "../../services/swapi-services";
import Row from "../row";

import ErrorBoundry from "../error-boundry";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedItem: null,
    selectedItemS: null
  };

  onItemSelected = id => {
    this.setState({
      selectedItem: id
    });
  };
  onItemSelectedS = id => {
    this.setState({
      selectedItemS: id
    });
  };
  render() {
    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        renderItem={e => `${e.name}-${e.birthYear}`} //можно рендер, а можно ниже, как чилдрен
      >
        {e => e.name}
      </ItemList>
    );

    const itemDetails = (
      <ErrorBoundry>
        <ItemDetails
          itemId={this.state.selectedItem}
          getData={this.swapiService.getPerson}
          getImageURL={this.swapiService.getPersonImage}
        >
          <Record field="gender" label="Gender" />
          <Record field="birthYear" label="Birth Year" />
        </ItemDetails>
      </ErrorBoundry>
    );
    /*
    const starshipList = (
      <ItemList
        onItemSelected={this.onItemSelectedS}
        getData={this.swapiService.getAllStarships}
        renderItem={e => `${e.name}-${e.birthYear}`} //можно рендер, а можно ниже, как чилдрен
      >
        {({ name }) => name}
      </ItemList>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={this.state.selectedItemS}
        getData={this.swapiService.getStarship}
        getImageURL={this.swapiService.getStarshipImage}
      >
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    );
*/
    return (
      <div>
        <Row left={itemList} right={itemDetails} />
      </div>
    );
  }
}
