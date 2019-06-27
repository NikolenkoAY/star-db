import React from "react";

import "./item-list.css";

const ItemList = props => {
  const { data, onItemSelected, children: renderLabel } = props;

  const item = data.map(item => {
    const { id } = item;

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

ItemList.defaultProps = {
  onItemSelected: () => {}
}; // defaultProps for methods

export default ItemList;
