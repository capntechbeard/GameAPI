import React from "react";

import { createPlatformNodes, createStoreNodes } from "../lib/utility";

export const GameListView = props => {
  const name = props.name;
  const id = props.id;
  const metacritic = props.metacritic;
  const rating = props.rating;
  const released = props.released;
  const icon = props.icon;

  const platforms = props.parent_platforms;
  const stores = props.stores;
  const platformNodes = createPlatformNodes(platforms);
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
        <h2>{name}</h2>
        <h3>{metacritic}</h3>
        {rating > 0 && <h3>{rating}</h3>}
        <br />
        <div className="platformList">{platformNodes}</div>
        <div className="storeList">{storeNodes}</div>
        <p>Released: {released}</p>
      </div>
    </div>
  );
};
