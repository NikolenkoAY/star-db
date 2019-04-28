import React, { Component } from "react";

import SwapiSevice from "../../services/swapi-services";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import "./random-planet.css";

export default class RandomPlanet extends Component {
  swapiSevice = new SwapiSevice();

  componentDidMount() {
    this.updatePlanet();
    setInterval(this.updatePlanet, 5000);
  }

  state = {
    planet: {},
    loading: true,
    error: false
  };

  onError = () => {
    this.setState({
      error: true,
      loading: false
    }); // попробовать изменить error на !error
  };

  onPlanetLoaded = planet => {
    this.setState({
      planet,
      loading: false
    });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 20) + 2;
    this.swapiSevice
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    const { loading, planet, error } = this.state;

    return (
      <div className="random-planet jumbotron rounded">
        {loading ? (
          <Spinner />
        ) : error ? (
          <ErrorIndicator />
        ) : (
          <PlanetView planet={planet} />
        )}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;
  return (
    <React.Fragment>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
