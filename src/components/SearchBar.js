import { useState } from "react";

function SearchBar(props) {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
    props.handleSearch(event.target.value.toLowerCase());
  };

  return (
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
  );
}

export default SearchBar;
