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

  const metaGreen = {
    backgroundColor: "#6c3"
  };
  const metaYellow = {
    backgroundColor: "#fc3"
  };
  const metaRed = {
    backgroundColor: "#f00"
  };

  return (
    <div
      className="Outer-list-wrapper"
      style={outerWrapperStyle}
      onClick={onClick}
    >
      <div className="Inner-list-wrapper">
        <div className="Game-title">{name}</div>
        <div className="Ratings">
          {metacritic != null && (
            <div
              className="Metacritic"
              style={
                (metacritic >= 75 && metaGreen) ||
                (metacritic >= 50 && metaYellow) ||
                (metacritic >= 0 && metaRed)
              }
            >
              <div>{metacritic}</div>
            </div>
          )}
          <div className="User-rating">
            {rating > 0 && <div>User rating: {rating}</div>}
          </div>
        </div>

        <br />
        <div className="Floating-title">Platforms</div>
        <div className="Platform-list">{platformNodes}</div>
        <div className="Floating-title">Stores</div>
        <div className="Store-list">{storeNodes}</div>
        <p className="Release-date">Released: {released}</p>
      </div>
    </div>
  );
};
