import React, { Component } from "react";
import ItemList from "../item-list";
import { withData } from "../hoc-helpers";
import SwapiService from "../../services/swapi-services";

const swapiService = new SwapiService();

const { getAllPeople, getAllPlanets, getAllStarships } = swapiService;

const withChildFunction = (Wrapper, fn) => {
  return props => {
    return <Wrapper {...props}>{fn}</Wrapper>;
  };
};

const ListWithCildren = withChildFunction(ItemList, ({ name }) => (
  <span>{name}</span>
));

const PersonList = withData(ListWithCildren, getAllPeople);
const PlanetList = withData(ListWithCildren, getAllPlanets);
const StarshipList = withData(ListWithCildren, getAllStarships);

export { PersonList, PlanetList, StarshipList };
