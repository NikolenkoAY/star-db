import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import { PeoplePage, PlanetList, StarshipPage } from "../pages";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-services";
import DummySwapiService from "../../services/dummy-swapi-service";

import ErrorBoundry from "../error-boundry";

import { SwapiServiceProvider } from "../swapi-service-context";

import "./app.css";

export default class App extends Component {
  state = {
    hasError: false,
    swapiService: new SwapiService()
  };
  componentDidCatch() {
    this.setState({ hasError: true });
  }

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;

      console.log(Service.name);

      return {
        swapiService: new Service()
      };
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <div className="container">
        <ErrorBoundry>
          <SwapiServiceProvider value={this.state.swapiService}>
            <Header onServiceChange={this.onServiceChange} />
            <RandomPlanet />
            <PeoplePage />
            <PlanetList />
            <StarshipPage />
          </SwapiServiceProvider>
        </ErrorBoundry>
      </div>
    );
  }
}
