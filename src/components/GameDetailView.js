import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaystation, faXbox } from "@fortawesome/free-brands-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { createPlatformNodes } from "../lib/utility";

export const GameDetailView = props => {
  const name = props.name;
  const description = props.description;
  const metacritic = props.metacritic;
  const rating = props.rating;
  const released = props.released;
  const background_image = props.background_image;
  const website = props.website;
  const clip = props.clip;
  const hideGameDetail = props.hideGameDetail;

  const platforms = props.parent_platforms;
  const platformNodes = createPlatformNodes(platforms);

  const outerWrapperStyle = {
    backgroundImage: "url(" + background_image + ")"
  };

  return (
    <div>
      <header className="App-header">
        <div className="Outer-wrapper" style={outerWrapperStyle}>
          <div className="Inner-wrapper">
            <button className="Back-button" onClick={hideGameDetail}>
              <b>{`<<<Back<<<`}</b>
            </button>
            <h2>{name}</h2>
            <h3>{metacritic}</h3>
            {rating > 0 && <h3>{rating}</h3>}
            {platformNodes}
            <p>Released: {released}</p>
            <div dangerouslySetInnerHTML={{ __html: description }} />
            {clip && <video width="320" height="240" src={clip} controls />}
            <br />
            <p>
              Website: <a href={website}>{website}</a>
            </p>
          </div>
        </div>
      </header>
    </div>
  );
};
