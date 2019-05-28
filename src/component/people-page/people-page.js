import React, { Component } from "react";

import ItemList from "../item-list";
import ItemDetails, { Record } from "../item-details";

import "./people-page.css";

import SwapiService from "../../services/swapi-services";
import Row from "../row";

import ErrorBoundry from "../error-boundry";



import { PersonList } from "../sw-components";

import { PersonDetails } from "../sw-components";


export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedItem: null,

  };

  onItemSelected = id => {
    this.setState({
      selectedItem: id
    });
  };

  render() {
    /*   const itemList = (
         <ItemList
           onItemSelected={this.onItemSelected}
           renderItem={e => e.name} //можно рендер, а можно ниже, как чилдрен
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
   */
    return (
      <div>
        <Row
          left={
            <ErrorBoundry>
              <PersonList onItemSelected={this.onItemSelected}>
                {({ name }) => <span>{name}</span>}
              </PersonList>
            </ErrorBoundry>}
          right={
            <ErrorBoundry>
              <PersonDetails itemId={this.state.selectedItem}>
              </PersonDetails>
            </ErrorBoundry>} />
      </div>
    );
  }
}
