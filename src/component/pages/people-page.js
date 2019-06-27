import React, { Component } from "react";

import Row from "../row";
import ErrorBoundry from "../error-boundry";
import {PersonDetails, PersonList } from "../sw-components";
 
import "../pages/pages.css";

export default class PeoplePage extends Component {


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
              <PersonList onItemSelected={this.onItemSelected} />
            </ErrorBoundry>
          }
          right={
            <ErrorBoundry>
              <PersonDetails itemId={selectedItem} />
            </ErrorBoundry>
          }
        />
      </div>
    );
  }
}
