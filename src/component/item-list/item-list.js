import React, { Component } from "react";

import "./item-list.css";

import SwapiService from "../../services/swapi-services";
import { withData } from "../hoc-helper";

const ItemList = props => {
  const { data, onItemSelected, children: renderLabel } = props;

  const item = data.map(item => {
    const { id } = item;

    // const label = this.props.renderItem(item); // функция передана через пропс
    const label = renderLabel(item); // это через чилдрен
    return (
      <li
        className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {label}
      </li>
    );
  });

  return <ul className="item-list list-group">{item}</ul>;
};

const { getAllPeople } = new SwapiService();

export default withData(ItemList, getAllPeople);
