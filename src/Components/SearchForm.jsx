import React from "react";
import { useMovieContext } from "../util/Context";

const SearchForm = () => {
  const { query, setQuery, error } = useMovieContext();
  return (
    <form onSubmit={(e) => e.preventDefault()} className="search-form">
      <h2>Search Movie DB</h2>
      <input
        type="text"
        className="form-imput"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {error.show && <div className="error">{error.msg}</div>}
    </form>
  );
};

export default SearchForm;
