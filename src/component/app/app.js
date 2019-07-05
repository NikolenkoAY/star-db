import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../header";
import RandomPlanet from "../random-planet";
import { PeoplePage, PlanetPage, StarshipPage, LoginPage, SecretPage } from "../pages";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-services";
import DummySwapiService from "../../services/dummy-swapi-service";

import ErrorBoundry from "../error-boundry";

import { SwapiServiceProvider } from "../swapi-service-context";

import "./app.css";
import { StarshipDetails } from "../sw-components";

export default class App extends Component {
  state = {
    hasError: false,
    swapiService: new SwapiService(),
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    })
  }


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

    const { isLoggedIn } = this.state


    return (
      <div className="container">
        <ErrorBoundry>
          <SwapiServiceProvider value={this.state.swapiService}>
            <Router>
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet updateInterval={3000} />
              <Route path="/" render={() => <h2>Welcome to StarDB</h2>} exact />

              <Route path="/people/:id?" exact component={PeoplePage} />
              <Route path="/planets" component={PlanetPage} />
              <Route path="/starships" exact component={StarshipPage} />
              <Route
                path="/starships/:id"
                render={({ match }) => {
                  const { id } = match.params;
                  return <StarshipDetails itemId={id} />;
                }}
              />





              <Route
                path="/login"
                render={() => (
                  <LoginPage
                    isLoggedIn={isLoggedIn}
                    onLogin={this.onLogin} />)}
              />



              <Route
                path="/secret"
                render={() => (<SecretPage isLoggedIn={isLoggedIn} />)} />

            </Router>
          </SwapiServiceProvider>
        </ErrorBoundry>
      </div>
    );
  }
}
