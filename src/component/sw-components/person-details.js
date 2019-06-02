import React from "react";

import ItemDetails, { Record } from "../item-details";
import { SwapiServiceConsumer } from "../swapi-service-context";
import { withSwapiService } from "../hoc-helpers";

const PersonDetails = ({ itemId, swapiService }) => {
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
};
export default withSwapiService(PersonDetails);
