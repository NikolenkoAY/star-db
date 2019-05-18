import React, { Component } from "react";

import Header from "../header";
import PlanetDetails from "../planet-details";
import RandomPlanet from "../random-planet";
import StarshipDetails from "../starship-details";
import PeoplePage from "../people-page/people-page";

import "./app.css";
import ErrorIndicator from "../error-indicator";
import PersonDetails from "../person-details/person-details";
import ItemList from "../item-list";
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

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onPersonSelected={e => null}
              getData={this.swapiService.getAllPlanets}
              renderItem={({ name, population }) => (
                <span>
                  {name} {population}{" "}
                </span>
              )}
            />
          </div>
        </div>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onPersonSelected={e => null}
              getData={this.swapiService.getAllStarships}
              renderItem={({ name, model }) => `${name} - ${model} `}
            />
          </div>
        </div>

        <PlanetDetails />
        <StarshipDetails />
      </div>
    );
  }
}
