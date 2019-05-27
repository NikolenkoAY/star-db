import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
//import PeoplePage from "../people-page/people-page";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-services";
import ErrorBoundry from "../error-boundry";


import {
  PersonList,
  PlanetList,
  StarshipList
} from "../sw-components"

import "./app.css";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    hasError: false
  };
  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <div className="container">
        <ErrorBoundry>
          <Header />
          <RandomPlanet />
          <PersonList>
            {({name})=><span>{name}</span>}
          </PersonList>
          <PlanetList>
            {({name})=><span>{name}</span>}
          </PlanetList>
          <StarshipList>
            {({name})=><span>{name}</span>}
          </StarshipList>
        </ErrorBoundry>
      </div>
    );
  }
}
/*   
<RandomPlanet />
<PeoplePage />
        <PlanetDetails />
        <StarshipDetails />
         <PeoplePage />
 <Row left={personDetails} right={starshipDetails} />

        */
