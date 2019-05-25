import React, { Component } from "react";

import Header from "../header";
/*import PlanetDetails from "../planet-details";
import RandomPlanet from "../random-planet";
import StarshipDetails from "../starship-details";
import PeoplePage from "../people-page/people-page";*/
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-services";
import ErrorBoundry from "../error-boundry";
import Row from "../row";
import ItemDetails, { Record } from "../item-details";

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

    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage
    } = this.swapiService;

    const personDetails = (
      <ItemDetails itemId={11} getData={getPerson} getImageURL={getPersonImage}>
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />{" "}
      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageURL={getStarshipImage}
      />
    );

    return (
      <div className="container">
        <ErrorBoundry>
          <Header />

          <Row left={personDetails} right={starshipDetails} />
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
