import React from "react";
import { withRouter } from "react-router-dom";

import Row from "../row";
import ErrorBoundry from "../error-boundry";
import { PersonDetails, PersonList } from "../sw-components";

import "../pages/pages.css";

const PeoplePage = ({history, match}) => {

    const {id} = match.params;

    return (
      <div>
        <Row
          left={
            <ErrorBoundry>
              <PersonList onItemSelected={itemId => history.push(itemId)} />
            </ErrorBoundry>
          }
          right={
            <ErrorBoundry>
              <PersonDetails itemId={id} />
            </ErrorBoundry>
          }
        />
      </div>
    );

}


export default  withRouter(PeoplePage);