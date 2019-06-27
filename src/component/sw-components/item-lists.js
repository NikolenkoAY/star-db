import React from "react";
import ItemList from "../item-list";
import { withData, withSwapiService } from "../hoc-helpers";

const withChildFunction = (Wrapper, fn) => {
  return props => {
    return <Wrapper {...props}>{fn}</Wrapper>;
  };
};

const renderName = (e) => <span>{e.name }</span>;

const mapPersonMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPeople
  };
};
const mapPlanetMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPlanets
  };
};

const mapStarshipsMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllStarships
  };
};

const PersonList = withSwapiService(
  withData(withChildFunction(ItemList, renderName)),
  mapPersonMethodsToProps
);
const PlanetList = withSwapiService(
  withData(withChildFunction(ItemList, renderName)),
  mapPlanetMethodsToProps
);

const StarshipList = withSwapiService(
  withData(withChildFunction(ItemList, renderName)),
  mapStarshipsMethodsToProps
);

export { PersonList, PlanetList, StarshipList };
