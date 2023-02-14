import React, { useState } from "react";
import {Link} from 'react-router-dom';

const HomePage = () => {
  // State to keep track of the search input
  const [searchInput, setSearchInput] = useState("");

  // Event handler for the search input change
  const handleSearchInputChange = (event) => setSearchInput(event.target.value);

  // Event handler for the search form submission
  const handleSearchFormSubmit = (event) => {
    event.preventDefault();
    // Perform the search here
  };

  return (
    <div>
      <h1>Masjid NYC</h1>
      <h3>Find a Masjid convenient for you in New York City</h3>
      <h2>Which Borough are you looking for a masjid at?</h2>
      <div>
        <Link to="/MasjidsInManhattan">
          <button>Manhattan</button>
        </Link>
        <Link to="/MasjidsInBrooklyn">
          <button>Brooklyn</button>
        </Link>
        <Link to="/MasjidsInStatenIsland">
          <button>Staten Island</button>
        </Link>
        <Link to="./MasjidsInQueens">
          <button>Queens</button>
        </Link>
        <Link to="/MasjidsInBronx">
          <button>The Bronx</button>
        </Link>
      </div>
      <form onSubmit={handleSearchFormSubmit}>
        <input
          type="text"
          value={searchInput}
          onChange={handleSearchInputChange}
          placeholder="Search for mosques near you"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default HomePage;
