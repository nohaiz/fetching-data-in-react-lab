import { useState } from "react";

const StarshipSearch = ({ getSearch }) => {
  const [starships, setStarship] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    getSearch(starships);
    setStarship("");
  };
  return (
    <>
      <h2>Search</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="starships">Search Term:</label>
        <input
          type="text"
          id="starships"
          value={starships}
          onChange={(e) => setStarship(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default StarshipSearch;
