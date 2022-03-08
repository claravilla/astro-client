import { useState } from "react";

function SearchBar(props) {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
    props.handleSearch(event.target.value.toLowerCase());
  };

  return (
    <form>
      <label>Search by Name</label>
      <input
        type="text"
        name="searchInput"
        value={searchInput}
        onChange={handleSearchInput}
      />
    </form>
  );
}

export default SearchBar;
