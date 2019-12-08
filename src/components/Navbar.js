import React from "react";

export const Navbar = props => {
  const onClickList = props.onClickList;
  const onClickRandom = props.onClickRandom;
  const onClickMeh = props.onClickMeh;
  return (
    <div className="Nav-bar">
      <span onClick={onClickList}>Top Games</span>
      <span onClick={onClickRandom}>Random Game</span>
      {/* <span>My Games</span> */}
      <span onClick={onClickMeh}>Meh Game</span>
    </div>
  );
};
