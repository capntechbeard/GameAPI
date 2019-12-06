import React from "react";
import { createPlatformNodes, createStoreNodes } from "../lib/utility";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

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
  const stores = props.stores;
  const platformNodes = createPlatformNodes(platforms);
  const storeNodes = createStoreNodes(stores);

  const outerWrapperStyle = {
    backgroundImage: "url(" + background_image + ")"
  };

  return (
    <div>
      <header className="App-header">
        <div className="Outer-wrapper" style={outerWrapperStyle}>
          <div className="Inner-wrapper">
            <button className="Back-button" onClick={hideGameDetail}>
              <b>
                <FontAwesomeIcon icon={faArrowLeft} />
              </b>
            </button>
            <div className="Game-list-header">
              <h2>{name}</h2>
              <h3>{metacritic}</h3>
              {rating > 0 && <h3>{rating}</h3>}
            </div>
            <div className="platformList">{platformNodes}</div>
            <div className="storeList">{storeNodes}</div>
            <p className="Release-date">Released: {released}</p>
            <div
              className="Detail-description"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <h3>Preview:</h3>
            {clip && <video src={clip} controls />}
            <br />
            <div className="Detail-website">
              <span>
                Website: <a href={website}>{" " + website}</a>
              </span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
