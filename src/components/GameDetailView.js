import React from "react";

export const GameDetailView = props => {
  const name = props.name;
  const description = props.description;
  const metacritic = props.metacritic;
  const rating = props.rating;
  const released = props.released;
  const background_image = props.background_image;
  const website = props.website;
  const clip = props.clip;
  // const parent_platforms = props.parent_platforms;
  const outerWrapperStyle = {
    backgroundImage: "url(" + background_image + ")"
  };
  // const fadedBackgroundStyle = {
  //   backgroundImage: "url(" + background_image + ")"
  // };

  return (
    <div>
      <div className="Blur-wrapper" />
      <header className="App-header">
        <div className="Outer-wrapper" style={outerWrapperStyle}>
          <div className="Inner-wrapper">
            <h2>{name}</h2>
            <h3>{metacritic}</h3>
            {rating > 0 && <h3>{rating}</h3>}

            <p>Released: {released}</p>
            <div dangerouslySetInnerHTML={{ __html: description }} />
            {clip && <video width="320" height="240" src={clip} controls />}
            <a>{website}</a>
          </div>
        </div>
      </header>
    </div>
  );
};
