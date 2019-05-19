import React, { Component } from "react";

import Header from "../header";
import PlanetDetails from "../planet-details";
import RandomPlanet from "../random-planet";
import StarshipDetails from "../starship-details";
import PeoplePage from "../people-page/people-page";

import "./app.css";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-services";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    hasError: false
  };
  componentDidCatch() {
    console.log("as");
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return (
      <div className="container">
        <Header />
        <RandomPlanet />
        <PeoplePage />

        <PlanetDetails />
        <StarshipDetails />
      </div>
    );
  }
}
