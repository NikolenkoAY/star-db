import React, { Component } from "react";

import Row from "../row";
import ErrorBoundry from "../error-boundry";
import {PlanetDetails, PlanetList } from "../sw-components";
 
import "../pages/pages.css";

export default class PlanetPage extends Component {


  state = {
    selectedItem: null
  };

  onItemSelected = id => {
    this.setState({
      selectedItem: id
    });
  };

  render() {
      const {selectedItem} =this.state;
    return (
      <div>
        <Row
          left={
            <ErrorBoundry>
              <PlanetList onItemSelected={this.onItemSelected} />
            </ErrorBoundry>
          }
          right={
            <ErrorBoundry>
              <PlanetDetails itemId={selectedItem} />
            </ErrorBoundry>
          }
        />
      </div>
    );
  }
}
