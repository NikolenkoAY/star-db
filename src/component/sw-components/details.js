import React, { Component } from "react";

import SwapiService from "../../services/swapi-services";
import ItemDetails, { Record } from "../item-details"

const swapiService = new SwapiService()

const { getPerson, getPlanet, getStarship, getPersonImage, getPlanetImage, getStarshipImage } = swapiService;

const PersonDetails = () => {

}

const PlanetDetails = () => {

}

const StarshipDetails = () => {

}

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}