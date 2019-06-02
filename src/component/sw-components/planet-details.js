import React from "react";

import ItemDetails, { Record } from "../item-details";
import { SwapiServiceConsumer } from "../swapi-service-context";

const PlanetDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {({ getPlanet, getPlanetImage }) => {
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
      }}
    </SwapiServiceConsumer>
  );
};

export { PlanetDetails };
