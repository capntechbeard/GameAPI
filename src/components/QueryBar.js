import React from "react";

export const QueryBar = props => {
  const handleGenreChange = props.handleGenreChange;
  const handleSearch = props.handleSearch;

  return (
    <div className="Query-bar">
      <select onChange={handleGenreChange}>
        <option value="action">Action</option>
        <option value="role-playing-games-rpg">RPG</option>
        <option value="adventure">Adventure</option>
        <option value="indie">Indie</option>
        <option value="shooter">Shooter</option>
        <option value="strategy">Strategy</option>
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};
