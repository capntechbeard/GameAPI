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

  const metaGreen = {
    backgroundColor: "#6c3"
  };
  const metaYellow = {
    backgroundColor: "#fc3"
  };
  const metaRed = {
    backgroundColor: "#f00"
  };

  console.log(props.id);

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

            <div className="Game-title">{name}</div>
            <div className="Ratings">
              {!!metacritic && (
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

              {rating > 0 && (
                <div className="User-rating">
                  <div>User rating: {rating}</div>
                </div>
              )}
            </div>

            <div className="Platform-list">{platformNodes}</div>
            <div className="Store-list">{storeNodes}</div>
            <p className="Release-date">Released: {released}</p>

            {!!description && (
              <div
                className="Detail-description"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}

            {!!clip && (
              <div>
                <p className="Release-date">Preview:</p>
                {clip && <video src={clip} controls />}
              </div>
            )}

            <br />
            {!!website && (
              <div className="Detail-website">
                <a href={website}>
                  <div>Website: {" " + website}</div>
                </a>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};
