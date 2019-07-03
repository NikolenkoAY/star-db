import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../header";
import RandomPlanet from "../random-planet";
import { PeoplePage, PlanetPage, StarshipPage } from "../pages";
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
            <Router>
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet updateInterval={3000} />
              <Route path="/" render={() => <h2>Welcome to StarDB</h2>} exact />

              <Route path="/people" component={PeoplePage} />
              <Route path="/planets" component={PlanetPage} />
              <Route path="/starships" component={StarshipPage} />
            </Router>
          </SwapiServiceProvider>
        </ErrorBoundry>
      </div>
    );
  }
}
