import { useState } from "react";

function SearchBar(props) {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
    props.handleSearch(event.target.value.toLowerCase());
  };

  const handleSearchReset = (e) => {
    setSearchInput("");
    props.resetSearch();
  };

  return (
    <div className="search-section">
      <form className="search-bar">
        <input
          className="search-input"
          type="text"
          name="searchInput"
          value={searchInput}
          onChange={handleSearchInput}
          placeholder="Search by Name"
        />
      </form>
      <button className="search-btn" onClick={handleSearchReset}>
        Reset Search
      </button>
    </div>
  );
}

export default SearchBar;
