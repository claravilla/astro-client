import { useState } from "react";

function ObjectListFilters(props) {
  const [season, setSeason] = useState("0");
  const [type, setType] = useState("0");
  const [difficulty, setDifficulty] = useState("0");

  const handleFiltersInputs = (e) => {
    e.preventDefault();
    props.handleFilters(difficulty, season, type);
  };

  const resetFilters = (e) => {
    e.preventDefault();
    setSeason("0");
    setType("0");
    setDifficulty("0");
    props.resetFilters();
  };

  return (
    <div className="filters-section">
      <p>..or Filter</p>
      <form className="filters-form">
        <div className="filters-input-section">
          <select
            value={difficulty}
            onChange={(e) => {
              setDifficulty(e.target.value);
            }}
          >
            <option value="">Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <select
            name="season"
            value={season}
            onChange={(e) => {
              setSeason(e.target.value);
            }}
          >
            <option value="">Season</option>
            <option value="Winter">Winter</option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
            <option value="Autumn">Autumn</option>
          </select>
          <select
            name="type"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <option value="">Type</option>
            <option value="Double star">Double star</option>
            <option value="Emission Nebula">Emission Nebula</option>
            <option value="Galaxy">Galaxy</option>
            <option value="Globular Cluster">Globular Cluster</option>
            <option value="Open CLuster">Open CLuster</option>
            <option value="Planetary Nebula">Planetary Nebula</option>
            <option value="Reflection Nebula">Reflection Nebula</option>
            <option value="Supernova remnant">Supernova remnant</option>
          </select>
        </div>
        <div className="filters-btn-section">
          <button onClick={handleFiltersInputs}>Filter</button>
          <button onClick={resetFilters}>Reset Filters</button>
        </div>
      </form>
    </div>
  );
}

export default ObjectListFilters;
