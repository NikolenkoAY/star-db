import React, { Component } from "react";

import Header from "../header";
import PlanetDetails from "../planet-details";
import RandomPlanet from "../random-planet";
import StarshipDetails from "../starship-details";
import PeoplePage from "../people-page/people-page";

import "./app.css";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-services";
import ErrorBoundry from "../error-boundry";
import Row from "../row";
import ItemDetails from "../item-details";

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

    const personDetails=(
      <ItemDetails itemId={11}
      getData={this.swapiService.getPerson}/>
    )

    const starshipDetails = (
      <ItemDetails itemId={5}
      getData= {this.swapiService.getStarship} />
    )
      
    return (
      <div className="container">
      <ErrorBoundry>
        <Header />
        
        <Row left={personDetails} right={starshipDetails}/>

 
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
*/