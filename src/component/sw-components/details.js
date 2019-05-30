import React from "react";

import SwapiService from "../../services/swapi-services";
import ItemDetails, { Record } from "../item-details";
import { SwapiServiceConsumer } from "../swapi-service-context";

const swapiService = new SwapiService();

const {
  getPlanet,
  getStarship,
  getPlanetImage,
  getStarshipImage
} = swapiService;

const PersonDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {swapiService => {
        return (
          <ItemDetails
            itemId={itemId}
            getData={swapiService.getPerson}
            getImageURL={swapiService.getPersonImage}
          >
            <Record field="gender" label="Gender" />
            <Record field="birthYear" label="Birth Year" />
          </ItemDetails>
        );
      }}
    </SwapiServiceConsumer>
  );
};
const PlanetDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      getImageURL={getPlanetImage}
    >
      <Record field="population" label="Population" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  );
};
const StarshipDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getStarship}
      getImageURL={getStarshipImage}
    >
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  );
};

export { PersonDetails, PlanetDetails, StarshipDetails };
