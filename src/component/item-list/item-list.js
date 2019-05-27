import React from "react";

import "./item-list.css";

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



export default ItemList;
