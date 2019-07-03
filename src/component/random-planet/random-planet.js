import React, { Component } from "react";
import PropTypes from "prop-types";

import SwapiSevice from "../../services/swapi-services";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import "./random-planet.css";

export default class RandomPlanet extends Component {
  static defaultProps = {
    updateInterval: 5000
  }; // defaultPropsc for class

  static propTypes = {
    updateInterval: PropTypes.number
  };

  swapiSevice = new SwapiSevice();

  componentDidMount() {
    const { updateInterval } = this.props;
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, updateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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
    });
  };

  onPlanetLoaded = planet => {
    this.setState({
      planet,
      loading: false
    });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 17) + 2;
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
        alt="planet"
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
