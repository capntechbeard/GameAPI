import React from "react";

import { createPlatformNodes, createStoreNodes } from "../lib/utility";

export const GameListView = props => {
  const {
    name,
    metacritic,
    rating,
    released,
    icon,
    parent_platforms,
    stores
  } = props;
  const platformNodes = createPlatformNodes(parent_platforms);
  const storeNodes = createStoreNodes(stores);

  const outerWrapperStyle = {
    backgroundImage: "url(" + icon + ")"
  };
  const onClick = props.onClick;

  return (
    <div
      className="Outer-list-wrapper"
      style={outerWrapperStyle}
      onClick={onClick}
    >
      <div className="Inner-list-wrapper">
        <div className="Game-list-header">
          <h2>{name}</h2>
          <div className="">{metacritic}</div>
          {rating > 0 && <h3>{rating}</h3>}
        </div>
        <br />
        <h3>Platforms</h3>
        <div className="Platform-list">{platformNodes}</div>
        <h3>Stores</h3>
        <div className="Store-list">{storeNodes}</div>
        <p className="Release-date">Released: {released}</p>
      </div>
    </div>
  );
};
