import React, { Component } from "react";

import Row from "../row";
import ErrorBoundry from "../error-boundry";
import {StarshipDetails, StarshipList } from "../sw-components";
 
import "../pages/pages.css";

export default class StarshipPage extends Component {


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
              <StarshipList onItemSelected={this.onItemSelected} />
            </ErrorBoundry>
          }
          right={
            <ErrorBoundry>
              <StarshipDetails itemId={selectedItem} />
            </ErrorBoundry>
          }
        />
      </div>
    );
  }
}
