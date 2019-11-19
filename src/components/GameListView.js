import React from "react";

import { createPlatformNodes } from "../lib/utility";

export const GameListView = props => {
  const name = props.name;
  const id = props.id;
  const metacritic = props.metacritic;
  const rating = props.rating;
  const released = props.released;
  const icon = props.icon;

  const platforms = props.parent_platforms;
  const platformNodes = createPlatformNodes(platforms);

  const outerWrapperStyle = {
    backgroundImage: "url(" + icon + ")"
  };
  // const fadedBackgroundStyle = {
  //   backgroundImage: "url(" + background_image + ")"
  // };
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
        {platformNodes}
        <p>Released: {released}</p>
      </div>
    </div>
  );
};
