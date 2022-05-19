import React from "react";

const Search = () => {
  return (
    <div>
      <div className="search">
        <input
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="Rechercher"
        ></input>
      </div>
      <div className="search_results">
        <div className="search_results">donnée</div>
      </div>
    </div>
  );
};

export default Search;
